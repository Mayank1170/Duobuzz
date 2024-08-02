import React from 'react'
import RightMenuItem from './RightMenuItem'

const RightMenuList: React.FC<RightSidebarLinkInfo> = ({ title, links }) => {
    return (
        <div className={"flex flex-col gap-[20px] "}>
            <h4 className={"text-[14px] text-[#949494] ml-[20px]"}>{title}</h4>
            <ul className={"text-[16px] font-semibold flex flex-col  gap-[5px]"}>
                {
                    links.map(link => <RightMenuItem key={link.id} linkInfo={link} />)
                }
            </ul>
        </div>
    )
}

export default RightMenuList
