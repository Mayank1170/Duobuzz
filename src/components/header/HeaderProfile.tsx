import React from 'react'
import { PiBellBold } from "react-icons/pi";

const HeaderProfile:React.FC = () => {
  return (
    <div className='flex py-[30px]'>
      <div className='w-[50px] h-[50px] rounded-2xl flex text-[20px] font-bold justify-center items-center bg-[#212121]'>
        <PiBellBold fill='white'/>
      </div>
    </div>
  )
}

export default HeaderProfile
