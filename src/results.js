import React, { useEffect } from 'react'

const Result = ({info}) => {
    useEffect(()=>{
      console.log(info);
    })
    
  return (
    <section className='flex text-[var(--font-color)] flex-col gap-4 items-center justify-start pt-3 absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 w-11/12 z-20 overflow-hidden rounded-md shadow-[var(--btn-color)] shadow-3xl max-w-2xl  h-4/5 bg-[var(--background-primary)] mx-auto'>
    <article>
    <div onClick={()=>console.log(info)} className='bg-purple-600  w-14 sm:w-28 sm:h-28 h-14 rounded-full'>
    </div>
    <h4 className='font-bold uppercase'>name</h4>
    </article>
    <section className='w-full p-4 max-h-[65%] overflow-y-auto scrollbar-thin scrollbar-track-trans-white scrollbar-thumb-purple-600'>
        
    <ul className='w-full list-inside font-semibold list-disc break-words  text-left flex justify-center gap-2 flex-col overflow-y-auto  scrollbar-thin scrollbar-track-trans-white scrollbar-thumb-purple-600'>
        <li>Your nickname is potato</li>
        <li>anfdjkafnlkajfafj,nv,mcv,cxmnv,mxnv,m</li>
        <li>anfdjkafnlkajfafj,nv,mcv,cxmnv,mxnv,m</li>
        <li>anfdjkafnlkajfafj,nv,mcv,cxmnv,mxnv,m</li>
        <li>anfdjkafnlkajfafj,nv,mcv,cxmnv,mxnv,m</li>
        <li>anfdjkafnlkajfafj,nv,mcv,cxmnv,mxnv,m</li>
        <li>anfdjkafnlkajfafj,nv,mcv,cxmnv,mxnv,m</li>
        <li>anfdjkafnlkajfafj,nv,mcv,cxmnv,mxnv,m</li>
        <li>anfdjkafnlkajfafj,nv,mcv,cxmnv,mxnv,m</li>
  
    </ul>
    </section>
        </section>
  )
}

export default Result