import React from 'react'
import SubscribeForm from "@/app/ui/subscribe-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareInstagram, faGoodreads} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div className="w-full">
      <SubscribeForm />
      <div className='mt-10 bg-emerald-800 h-px w-full'></div>
      <div className='w-full flex-col flex md:flex-row md:justify-between items-center py-4 px-2'>
        <div className='text-emerald-800 text-sm text-center mb-2'>
          © 2023 ChapterCapture. All rights reserved.
        </div>
        <div className='flex justify-center'>
          <FontAwesomeIcon icon={faSquareInstagram} className='text-emerald-800 text-3xl' />
          <FontAwesomeIcon icon={faGoodreads} className='text-emerald-800 text-3xl pl-3' />
        </div>
      </div>
    </div>
  )
}
