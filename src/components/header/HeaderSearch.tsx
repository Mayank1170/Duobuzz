import { useRouter } from 'next/navigation'
import React, { FormEvent, useRef } from 'react'
// import Icon

const HeaderSearch: React.FC = () => {

    return (
        <div className={"w-[40%] flex flex-row justify-center py-[30px]"}>
            {/* <Icon className={""} icon='search' /> */}
            <form className='w-full'>
                <input
                    className={"w-full bg-[#212121] p-4 rounded-xl"}
                    type='search'
                    placeholder='search your music here...'
                />
            </form>
        </div>
    )
}

export default HeaderSearch
