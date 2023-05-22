import React, { useContext } from 'react'
import { FriendContext } from '../App'
const Input = ({Id,msg,type}) => {
  const {setFriendInfo}=useContext(FriendContext)
  return (
    <article className="w-9/12 text-xs sm:text-sm md:text-base max-w-xs relative ">            
    <input type={type} onChange={(e)=>{
      setFriendInfo((oldInfo)=>{
        return({...oldInfo,[Id]:e.target.value})
      })

    }} id={Id} required className="peer/input shadow-custom w-full h-10 text-[var(--btn-color)] px-2 bg-inherit border-[var(--btn-color)]  font-bold rounded-md focus:outline-0" />
    <label for={Id} className=" uppercase  translate-y-[-50%] font-bold transition-custom top-1/2 left-2 bg-transparent text-[var(--font-color)] absolute peer-focus/input:top-[-50%] peer-valid/input:top-[-50%]"> {msg}</label>
    </article>
  )
}

export default Input