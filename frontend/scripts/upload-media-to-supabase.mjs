import fs from 'node:fs'
import path from 'node:path'
import { spawn } from 'node:child_process'
import { createClient } from '@supabase/supabase-js'

const MEDIA_BUCKET = process.env.SUPABASE_MEDIA_BUCKET || 'media'
const MAX_FILE_SIZE = Number(process.env.SUPABASE_MEDIA_FILE_SIZE_LIMIT || 1024 * 1024 * 100)
const PROJECT_ROOT = process.cwd()
const UPLOAD_CACHE_DIR = path.join(PROJECT_ROOT, '.upload-cache')

loadEnvFile('.env.local')
loadEnvFile('.env')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceRoleKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY

if (!supabaseUrl || !serviceRoleKey) {
  console.error(
    'Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in frontend/.env.local.'
  )
  process.exit(1)
}

const supabase = createClient(supabaseUrl, serviceRoleKey)

const mediaRoots = [
  { localDir: path.join(PROJECT_ROOT, 'public', 'images'), bucketPrefix: 'images' },
  { localDir: path.join(PROJECT_ROOT, 'public', 'video'), bucketPrefix: 'video' },
]
const uploadPrefixes = process.argv.slice(2).map((prefix) => prefix.replace(/^\/+|\/+$/g, ''))

const contentTypes = {
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.mp4': 'video/mp4',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webm': 'video/webm',
  '.webp': 'image/webp',
}
const videoExtensions = new Set(['.mp4', '.webm', '.mov', '.m4v'])

async function main() {
  await ensureBucket()

  const files = mediaRoots
    .flatMap(({ localDir, bucketPrefix }) =>
      fs.existsSync(localDir) ? getFiles(localDir, bucketPrefix) : []
    )
    .filter((file) =>
      uploadPrefixes.length === 0
        ? true
        : uploadPrefixes.some((prefix) => file.bucketPath.startsWith(prefix))
    )

  if (files.length === 0) {
    console.log('No media files found in public/images or public/video.')
    return
  }

  for (const file of files) {
    const uploadPath = await prepareUploadFile(file)
    const contentType = contentTypes[path.extname(file.localPath).toLowerCase()]
    const { error } = await supabase.storage
      .from(MEDIA_BUCKET)
      .upload(file.bucketPath, fs.readFileSync(uploadPath), {
        cacheControl: '31536000',
        contentType,
        upsert: true,
      })

    if (error) {
      throw new Error(`Failed to upload ${file.bucketPath}: ${error.message}`)
    }

    console.log(`Uploaded ${file.bucketPath}`)
  }

  console.log(`Done. Uploaded ${files.length} files to "${MEDIA_BUCKET}".`)
}

async function prepareUploadFile(file) {
  const size = fs.statSync(file.localPath).size
  const extension = path.extname(file.localPath).toLowerCase()

  if (size <= MAX_FILE_SIZE || !videoExtensions.has(extension)) {
    return file.localPath
  }

  const outputPath = path.join(UPLOAD_CACHE_DIR, file.bucketPath)
  fs.mkdirSync(path.dirname(outputPath), { recursive: true })

  console.log(`Compressing ${file.bucketPath} before upload`)
  await compressVideo(file.localPath, outputPath)

  const compressedSize = fs.statSync(outputPath).size
  if (compressedSize > MAX_FILE_SIZE) {
    throw new Error(
      `Compressed ${file.bucketPath} is still larger than ${Math.round(MAX_FILE_SIZE / 1024 / 1024)} MB`
    )
  }

  return outputPath
}

function compressVideo(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    const ffmpeg = spawn('ffmpeg', [
      '-y',
      '-i',
      inputPath,
      '-vf',
      'scale=-2:720',
      '-c:v',
      'libx264',
      '-preset',
      'medium',
      '-crf',
      '30',
      '-an',
      '-movflags',
      '+faststart',
      outputPath,
    ])

    ffmpeg.on('error', reject)
    ffmpeg.on('close', (code) => {
      if (code === 0) {
        resolve()
        return
      }

      reject(new Error(`ffmpeg exited with code ${code}`))
    })
  })
}

async function ensureBucket() {
  const { data: buckets, error: listError } = await supabase.storage.listBuckets()

  if (listError) {
    throw new Error(`Could not list buckets: ${listError.message}`)
  }

  if (buckets.some((bucket) => bucket.name === MEDIA_BUCKET)) return

  const { error: createError } = await supabase.storage.createBucket(MEDIA_BUCKET, {
    public: true,
    fileSizeLimit: MAX_FILE_SIZE,
  })

  if (createError) {
    throw new Error(`Could not create bucket "${MEDIA_BUCKET}": ${createError.message}`)
  }

  console.log(`Created public bucket "${MEDIA_BUCKET}".`)
}

function getFiles(dir, bucketPrefix) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const localPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      return getFiles(localPath, path.posix.join(bucketPrefix, entry.name))
    }

    return [
      {
        localPath,
        bucketPath: path.posix.join(bucketPrefix, entry.name),
      },
    ]
  })
}

function loadEnvFile(fileName) {
  const envPath = path.join(PROJECT_ROOT, fileName)
  if (!fs.existsSync(envPath)) return

  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/)

  for (const line of lines) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)\s*$/)
    if (!match || match[1].startsWith('#') || process.env[match[1]]) continue

    const value = match[2].replace(/^['"]|['"]$/g, '')
    process.env[match[1]] = value
  }
}

main().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
