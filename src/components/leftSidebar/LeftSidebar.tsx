import React from 'react'
import LeftSidebarMenu from './LeftSidebarMenu'
import LeftSidebarLogo from './LeftSidebarLogo'

const LeftSidebar = () => {
    return (
        <div className='h-screen flex flex-col max-w-[250px] bg-[#212121] gap-10'>
            <LeftSidebarLogo />
            <LeftSidebarMenu />
        </div>
    )
}

export default LeftSidebar
