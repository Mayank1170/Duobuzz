import React from 'react'
import Link from 'next/link'
import { HiHome, HiMusicNote, HiHeart } from 'react-icons/hi';
import { IoIosMicrophone } from 'react-icons/io';
import { MdMoreTime, MdPerson } from 'react-icons/md';
import { BiSolidPlaylist } from 'react-icons/bi';
import { IconType } from 'react-icons';

// Map icon names to the corresponding react-icons components
const iconsMap: { [key: string]: IconType } = {
    hut: HiHome,
    music: HiMusicNote,
    artist: IoIosMicrophone,
    recent: MdMoreTime,
    favourite: HiHeart,
    playlist: BiSolidPlaylist,
    profile: MdPerson,
};

const LeftMenuItem = ({ linkInfo }: { linkInfo: LeftSidebarLink }) => {
    const Icon = iconsMap[linkInfo.icon] || null;

    return (
        <li className="hover:bg-gradient-to-r from-[#FFFFFF]/10 to-[#FFFFFF60]/2 hover:border-r-4 border-green-500 border-3xl px-[20px] py-[10px]">
            <Link href={linkInfo.href}>
                <div className="flex items-center space-x-2">
                    {Icon && <Icon className="text-xl" />}
                    <span>{linkInfo.title}</span>
                </div>
            </Link>
        </li>
    )
}

export default LeftMenuItem;
