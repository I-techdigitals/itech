import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

export const MEDIA_BUCKET = 'media'
export const SUPABASE_IMAGE_QUALITY = 75

export const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null

const imageExtensions = /\.(avif|bmp|gif|ico|jpe?g|png|tiff?|webp)$/i
const storagePathPattern = /\/storage\/v1\/(?:object\/public|render\/image\/public)\/([^/]+)\/([^?#]+)/

function getStorageObjectPath(path) {
  if (!path) return null

  if (/^https?:\/\//i.test(path)) {
    const match = path.match(storagePathPattern)
    if (!match || match[1] !== MEDIA_BUCKET) return null
    return decodeURIComponent(match[2])
  }

  return path.replace(/^\/+/, '')
}

function encodeStoragePath(path) {
  return path.split('/').map(encodeURIComponent).join('/')
}

export function isResizableMediaImage(path) {
  const objectPath = getStorageObjectPath(path)
  return Boolean(objectPath && imageExtensions.test(objectPath))
}

export function mediaUrl(path, transform = undefined) {
  if (!path || /^https?:\/\//i.test(path)) return path
  if (!supabaseUrl) return path

  const cleanPath = path.replace(/^\/+/, '')
  const encodedPath = encodeStoragePath(cleanPath)
  const baseUrl = supabaseUrl.replace(/\/$/, '')

  if (transform && imageExtensions.test(cleanPath)) {
    const params = new URLSearchParams()

    if (transform.width) params.set('width', String(Math.min(Number(transform.width), 2500)))
    if (transform.height) params.set('height', String(Math.min(Number(transform.height), 2500)))
    if (transform.quality) params.set('quality', String(transform.quality))
    if (transform.resize) params.set('resize', transform.resize)

    const query = params.toString()
    return `${baseUrl}/storage/v1/render/image/public/${MEDIA_BUCKET}/${encodedPath}${query ? `?${query}` : ''}`
  }

  return `${baseUrl}/storage/v1/object/public/${MEDIA_BUCKET}/${encodedPath}`
}

export function mediaTransformUrl(path, transform = {}) {
  const objectPath = getStorageObjectPath(path)

  if (!objectPath || !imageExtensions.test(objectPath)) {
    return mediaUrl(path)
  }

  return mediaUrl(objectPath, {
    quality: SUPABASE_IMAGE_QUALITY,
    resize: 'cover',
    ...transform,
  })
}

export function mediaImageLoader({ src, width, quality }) {
  return mediaTransformUrl(src, {
    width,
    quality: quality || SUPABASE_IMAGE_QUALITY,
  })
}

export function mediaPrefetchUrl(path, width = 960) {
  return mediaTransformUrl(path, {
    width,
    quality: 70,
  })
}
