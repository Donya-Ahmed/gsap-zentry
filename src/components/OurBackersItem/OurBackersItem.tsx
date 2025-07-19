import React, { ReactNode } from 'react'

export default function OurBackersItem({item,aside}:{item:ReactNode,aside:string}) {
  return (
    <div className='backers-item '>
      <p className='relative '><p className='text-6xl font-zentry special-font uppercase text-white'>{item}</p>
        <aside className='text-[8px] absolute mr-8 right-full top-2 uppercase text-white font-general'>{aside}</aside>
      </p>
    </div>
  )
}
