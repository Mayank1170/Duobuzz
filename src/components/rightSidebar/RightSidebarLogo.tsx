import Link from 'next/link';
import Image from 'next/image';

import logo from "../../../public/Logo.svg";
// import styles from './SidebarLogo.module.scss'

const RightSidebarLogo = () => {
    return <Link className={"flex flex-row gap-5 justify-start items-center pl-[30px] p-2 mt-[30px] rounded-r-md"} href="/">
        <div className='w-[50px] h-[50px] rounded-full flex text-[20px] font-bold justify-center items-center border-4 border-gray-800 bg-cyan-700'>
            M
        </div>
        <div>
        <div className={"text-white font-semibold"}>User Name</div>
        <div className='text-xs text-[#7F7F7F]'>Premium</div>
        </div>
    </Link>
}

export default RightSidebarLogo;