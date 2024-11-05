import React from 'react'
import LeftSidebarMenu from './LeftSidebarMenu'
import LeftSidebarLogo from './LeftSidebarLogo'

const LeftSidebar = () => {
    return (
        <div className='h-screen flex flex-col max-w-[250px] bg-white/5 backdrop-blur-md gap-10'>
            <LeftSidebarLogo />
            <LeftSidebarMenu />
        </div>
    )
}

export default LeftSidebar
