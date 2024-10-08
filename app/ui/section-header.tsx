import React from 'react'
import {lusitana} from "@/app/ui/fonts";
import Image, { StaticImageData } from "next/image";

interface ISectionHeadline {
  icon: StaticImageData,
  headline: string
}

const SectionHeadline: React.FC<ISectionHeadline> = ({ icon, headline }) => {
  return (
    <div className='flex items-center pb-4 pt-10'>
      <Image className="w-8" width={64} height={64} src={icon} alt="headline" />
      <span className={`${lusitana.className} antialiased pl-2 font-semibold`}>{headline}</span>
    </div>
  )
}

export default SectionHeadline