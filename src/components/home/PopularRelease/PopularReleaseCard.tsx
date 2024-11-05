import React from "react";
import Link from "next/link";
import Image from "next/image";
// import image from "../../../../public/images/Popular/Image.png";

const PopularReleaseCard = ({ image, name, type }: { image: string; name: string; type: string }) => {
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
          <h4 className="text-sm truncate w-[120px]">{name}</h4>
          <span className="text-xs text-gray-400 m-0 p-0">{type}</span>
        </div>
      </Link>
    </>
  );
};

export default PopularReleaseCard;
