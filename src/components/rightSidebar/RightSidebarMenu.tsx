import { TopRightSidebar } from '@/constants/rightSidebar-links'
import { link } from 'fs'
import React from 'react'
// import MenuList from './menu/RightMenuList'
import RightMenuList from './menu/RightMenuList'

const RightSidebarMenu = () => {
    return (
        <div className='h-full flex flex-col gap-[7vh] '>
            {TopRightSidebar.map(info => (
                <RightMenuList key={info.id} title={info.title} info={info.info} id={0} />
            ))}
        </div>
    )
}

export default RightSidebarMenu
