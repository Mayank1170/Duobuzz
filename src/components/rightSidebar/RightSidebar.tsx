import React from 'react'
import RightSidebarMenu from './RightSidebarMenu'
import RightSidebarLogo from './RightSidebarLogo'

const Sidebar = () => {
    return (
        <div className='h-screen flex flex-col max-w-[250px] bg-[#212121] gap-10'>
            <RightSidebarLogo />
            <RightSidebarMenu />
        </div>
    )
}

export default Sidebar
