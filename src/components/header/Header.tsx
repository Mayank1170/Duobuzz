"use client"
import React from 'react'
import HeaderSearch from './HeaderSearch'
import HeaderProfile from './HeaderProfile'

const Header = () => {
    return (
        <header className='w-full flex flex-row gap-4 justify-end px-8'>
            <HeaderSearch />
            <HeaderProfile />
        </header>
    )
}

export default Header
