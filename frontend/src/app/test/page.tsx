'use client'

import { useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function Test() {
  useEffect(() => {
    const check = async () => {
      const { data, error } = await supabase.storage.listBuckets()
      console.log(data, error)
    }

    check()
  }, [])

  return <div>Check console</div>
}
