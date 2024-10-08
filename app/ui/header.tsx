import React from 'react'
import { lusitana } from '@/app/ui/fonts';

export default function Header(){
  return (
    <div className='pb-20'>
      <div className='text-center pt-6'>
        <h1 className={`${lusitana.className} text-emerald-800 text-4xl font-semibold mb-2`}>Chapter Capture</h1>
        <span className={`${lusitana.className} text-emerald-800 italic text-right`}>by Chmilevski</span>
      </div>
    </div>

  )
}
