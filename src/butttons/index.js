import React from 'react'

export const BackButton = ({slide,back}) => {
  back*=100
  
  return (
    <button className="text-white text-xs sm:text-sm md:text-base shadow-custom uppercase font-bold bg-[var(--btn-color)] rounded-md h-7 md:h-8  w-20 md:w-32"
    onClick={async ()=>slide.current.style.transform=`translate(-${back}%)`} >previous</button>
    )
}
export const ForwardButton = ({slide,forward,msg}) => {
  forward=forward*100
    return (
      <button className="text-white text-xs sm:text-sm md:text-base shadow-custom uppercase font-bold bg-[var(--btn-color)] rounded-md h-7 md:h-8 w-20 md:w-32"
      onClick={async ()=>slide.current.style.transform=`translateX(-${forward}%)`} >{msg}</button>
    )
  }