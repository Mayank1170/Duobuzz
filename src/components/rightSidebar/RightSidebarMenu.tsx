import { rightSidebarLinks } from '@/constants/rightSidebar-links'
import { link } from 'fs'
import React from 'react'
// import MenuList from './menu/RightMenuList'
import RightMenuList from './menu/RightMenuList'

const RightSidebarMenu = () => {
    return (
        <div className='h-full flex flex-col gap-[7vh] '>
            {rightSidebarLinks.map(link => (
                <RightMenuList key={link.id} title={link.title} links={link.links} id={0} />
            ))}
        </div>
    )
}

export default RightSidebarMenu
