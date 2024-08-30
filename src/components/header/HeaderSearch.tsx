import { useRouter } from 'next/navigation'
import React, { FormEvent, useRef } from 'react'
import { LuSearch } from "react-icons/lu";

const HeaderSearch: React.FC = () => {

    return (
        <div className={"w-[40%] flex flex-row justify-center py-[30px]"}>
           
            <form className=' flex items-center px-4 gap-4 h-fit w-full rounded-xl bg-[#212121]'>
            <LuSearch className='w-[20px] h-[20px]'/>
                <input
                    className={"w-full py-4 border-none outline-none bg-[#212121] rounded-xl  "}
                    type='search'
                    placeholder='search your music here...'
                />
            </form>
        </div>
    )
}

export default HeaderSearch
