import React from "react";
import Link from "next/link";
import Image from "next/image";
import image from "../../../../public/images/Popular/Image.png";

const PopularReleaseCard = () => {
  return (
    <>
      <Link className="w-fit p-2 rounded-lg flex flex-col gap-2 bg-gray-800" href="/">
        <Image
          className=""
          src={image}
          width={120}
          height={120}
          loading="lazy"
          alt={"artist image"}
        />
        <div className="flex flex-col gap-0">
          <h4 className="text-sm">Divide</h4>
          <span className="text-xs text-gray-400 m-0 p-0">2017 . Albumn</span>
        </div>
      </Link>
    </>
  );
};

export default PopularReleaseCard;
