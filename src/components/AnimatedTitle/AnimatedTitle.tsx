import React from 'react'

export default function AnimatedTitle({text,className}:{text: string,className?: string}) {
  return (
    <div className={`animated-title ${className}`}>
      {text.split("<br/>").map((part, index) => (
        <div key={index} className='flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3'>
            {part.split(" ").map((word,i)=>(<span className='animated-word' dangerouslySetInnerHTML={{__html:word}} key={i}></span>))}

        </div>
      ))}
    </div>
  )
}
