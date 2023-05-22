import React, { useContext, useEffect } from 'react'
import { FriendContext } from '../App'


const NaughtyBtn = () => {
  const {friendInfo,setFriendInfo}   = useContext(FriendContext)
  return (
    <div className='h-7 md:h-8 w-20 md-w-32 relative'>
      
    <input type="checkbox" className='absolute peer/trigger   w-full h-full checked:top-[-250%]  top-0 left-0 appearance-none'/>
    <button onClick={()=>{
    console.log(friendInfo);
  }} className="text-white top-0 left-0 peer-checked/trigger:top-[-250%] absolute  transition-custom duration-[.05s] text-xs sm:text-sm md:text-base  shadow-custom uppercase font-bold bg-[var(--btn-color)] rounded-md  w-full h-full"
     >no</button>
     </div>
  )
}

export default NaughtyBtn