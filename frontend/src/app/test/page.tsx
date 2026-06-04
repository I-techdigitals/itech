'use client'

import { useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function Test() {
  useEffect(() => {
    const check = async () => {
      if (!supabase) {
        console.log('Missing Supabase env vars')
        return
      }

      const { data, error } = await supabase.storage.listBuckets()
      console.log(data, error)
    }

    check()
  }, [])

  return <div>Check console</div>
}
