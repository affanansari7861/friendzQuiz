import React from 'react'

export const BackButton = ({slide,back}) => {
  back*=100
  
  return (
    <button className="text-white uppercase font-bold bg-cyan-400 rounded-md p-[calc(var(--font-size)/2)] w-32"
    onClick={async ()=>slide.current.style.transform=`translate(-${back}%)`} >previous</button>
    )
}
export const ForwardButton = ({slide,forward}) => {
  forward=forward*100
    return (
      <button className="text-white uppercase font-bold bg-cyan-400 rounded-md p-[calc(var(--font-size)/2)] w-32"
      onClick={async ()=>slide.current.style.transform=`translateX(-${forward}%)`} >next</button>
    )
  }