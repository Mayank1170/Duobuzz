import Link from 'next/link';
import Image from 'next/image';

import logo from "../../../public/Logo.svg";
// import styles from './SidebarLogo.module.scss'

const LeftSidebarLogo = () => {
    return <Link className={"flex flex-row gap-5 justify-start items-center pl-[30px] p-2 mt-[30px] bg-green-500 rounded-r-md"} href="/">
        <Image
            src={logo}
            width={50}
            height={50}
            loading='lazy'
            alt='music player logo image'
        />
        <div className={"text-white font-semibold"}>DuoBuzz</div>
    </Link>
}

export default LeftSidebarLogo;