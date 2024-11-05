import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/Logo.svg";
import apiClient from "../../spotify";
// import styles from './SidebarLogo.module.scss'

const RightSidebarLogo = () => {
  const [image, setImage] = useState(logo);
  const [userName, setUserName] = useState("Username");
  useEffect(() => {
    apiClient.get("/me").then(
      (res: {
        data: {
          display_name: string;
          images: { url: any }[];
        };
      }) => {
        setImage(res.data.images[0].url);
        setUserName(res.data.display_name);
      }
    );
  });
  return (
    <Link
      className={
        "flex flex-row gap-2 justify-start items-center pl-[30px] p-2 mt-[30px] rounded-r-md"
      }
      href="/"
    >
      <Image
        src={image}
        alt="logo"
        width={50}
        height={50}
        className="rounded-full border-2 border-green-500"
      />
      <div>
        <div className={"text-white font-semibold"}>{userName}</div>
      </div>
    </Link>
  );
};

export default RightSidebarLogo;
