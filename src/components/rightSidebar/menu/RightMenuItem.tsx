import React from 'react'
import Link from 'next/link'


const RightMenuItem = ({ linkInfo }: { linkInfo: RightSidebarLink }) => {
    return (
        <li className={"hover:bg-gradient-to-r from-[#FFFFFF]/10 to-[#FFFFFF60]/2 hover:border-r-4 border-green-500 border-3xl px-[20px] py-[10px]"}>
            <Link href={linkInfo.href} >
                {/* <Icon icon={icon} className={""} /> */}
                <span className={""}>{linkInfo.title}</span>
            </Link>
        </ li>
    )
}

export default RightMenuItem
