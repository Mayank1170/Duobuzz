import { leftSidebarLinks } from '@/constants/leftSidebar-links'
import { link } from 'fs'
import React from 'react'
import LeftMenuList from './menu/LeftMenuList'

const LeftSidebarMenu = () => {
    return (
        <div className='h-full flex flex-col gap-[7vh] '>
            {leftSidebarLinks.map(link => (
                <LeftMenuList key={link.id} title={link.title} links={link.links} id={0} />
            ))}
        </div>
    )
}

export default LeftSidebarMenu
