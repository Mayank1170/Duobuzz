import React from "react";
import Link from "next/link";
import Image from "next/image";
import image from "../../../../public/images/Popular/Image.png";
import { HiHeart } from "react-icons/hi";
import {
  PiHeadphonesBold,
  PiDotsThreeOutlineDuotone,
  PiClockAfternoonBold,
} from "react-icons/pi";

const PopularSongCard: React.FC = () => {
  return (
    <div className="group mt-5">
      <Link
        className="w-full p-2 rounded-lg flex flex-row justify-between items-center gap-4 bg-gradient-to-r from-transparent via-[#FFFFFF25] to-transparent group-hover:via-[#FFFFFF30] transition-all duration-300"
        href="/"
      >
        <div>1</div>
        <div className="w-full flex flex-row gap-3 items-center ">
          <Image
            className=""
            src={image}
            width={60}
            height={60}
            loading="lazy"
            alt={"artist image"}
          />
          <div className="flex flex-col gap-0">
            <h4 className="text-sm">Divide</h4>
            <span className="text-xs text-gray-400 m-0 p-0">2017 . Albumn</span>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="flex items-center ">
            <PiHeadphonesBold className="w-10 h-5" />
            <p>1,950,234,284</p>
          </div>
          <div className="flex items-center">
            <PiClockAfternoonBold className="w-10 h-5" />
            <p>3:27</p>
          </div>
          <div>
            <HiHeart className="w-10 h-5" />
          </div>
          <div>
            <PiDotsThreeOutlineDuotone className="w-10 h-5" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PopularSongCard;
