import React from 'react'

const Input = ({Id,msg}) => {
  return (
    <article className="w-9/12 text-[length:var(--font-size)] max-w-xs relative">            
    <input type="text" id={Id} required className="peer/input w-full h-10 text-white px-2 bg-inherit border-white border-2 rounded-md focus:outline-0" />
    <label for={Id} className=" uppercase  translate-y-[-50%]  transition-all ease-in duration-200 top-1/2 left-2 bg-slate-900 text-white absolute peer-focus/input:top-0 peer-valid/input:top-0"> {msg}</label>
    </article>
  )
}

export default Input