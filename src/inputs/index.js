import React, { useContext, useEffect } from 'react'
import { ACTIONS } from '../reducer'
const Input = ({Id,msg,type,dispatch}) => {
  return (
    <article className="w-9/12 text-xs sm:text-sm md:text-base max-w-xs relative ">            
    <input type={type} id={Id} onChange={e=>{
      dispatch({type:ACTIONS.CHANGEINFO,payload:{value:e.target.value,property:Id}})
    }} required className="peer/input shadow-custom w-full h-10 text-[var(--btn-color)] px-2 bg-inherit border-[var(--btn-color)]  font-bold rounded-md focus:outline-0" />
    <label htmlFor={Id} className=" uppercase  translate-y-[-50%] font-bold transition-custom top-1/2 left-2 bg-transparent text-[var(--font-color)] absolute peer-focus/input:top-[-50%] peer-valid/input:top-[-50%]"> {msg}</label>
    </article>
  )
}

export default Input