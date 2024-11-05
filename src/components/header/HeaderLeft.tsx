import React from 'react'
import { MdOutlineArrowBackIos } from "react-icons/md";

const HeaderBackButton = () => {
  return (
    <div className='flex h-fit  flex-row items-center gap-6'>
      <div className='w-[50px] h-[50px] rounded-2xl flex text-[20px] font-bold justify-center items-center bg-[#212121]'>
        <MdOutlineArrowBackIos fill='white'/>
      </div>
      <h1 className='text-sm text-[#FFFFFF90]'>Home</h1>
    </div>
  )
}

export default HeaderBackButton
