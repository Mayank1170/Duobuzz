import React from "react";
import Link from "next/link";
import Image from "next/image";

const RightMenuItem = ({ infoData }: { infoData: RightSidebarLink }) => {
  return (
    <li
      className={
        "border-3xl px-[20px] py-[10px]"
      }
    >
      <div className={"relative flex items-center gap-[10px] "}>
        <Image
          src={infoData.image}
          alt={infoData.name}
          width={200}
          height={200}
        />
        <div className="w-[96%] absolute bottom-0 left-0 mr-2 bg-black/60 rounded-b-md text-white px-2 py-1">
          <h3
            className={
              ""
            }
          >
            {infoData.name}
          </h3>
          <p className="text-[12px] text-gray-400">Artist</p>
        </div>
      </div>
    </li>
  );
};

export default RightMenuItem;
