import React from "react";
import Image from "next/image";
import image from "../../../public/images/Popular/Image.png";
import { FaRegHeart } from "react-icons/fa6";

const PlayerControls: React.FC = () => {
  return (
    <div className="flex flex-row gap-7 px-4 items-center">
      <div className="flex flex-row gap-2">
        <Image
          className=""
          src={image}
          width={60}
          height={60}
          loading="lazy"
          alt={"artist image"}
        />
        <div className="flex flex-col gap-0 justify-center">
          <h4 className="text-sm">Shape of you</h4>
          <span className="text-xs text-gray-400 m-0 p-0">Ed Sheeran</span>
        </div>
      </div>
      <button>
        <FaRegHeart />
      </button>
    </div>
  );
};

export default PlayerControls;
