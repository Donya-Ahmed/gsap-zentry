import React from 'react'

export default function Button({text,backgroundColor="bg-yellow-300",leftIcon,rightIcon}:{text:string,backgroundColor?:string,leftIcon?:React.ReactNode,rightIcon?:React.ReactNode}) {
  return (
    <button className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-robert-semibold text-black ${backgroundColor} hover:scale-105 transition-transform duration-300 rounded-full`}>{leftIcon}<span className="font-general text-xs uppercase">{text}</span>{rightIcon}
    </button>
  )
}
