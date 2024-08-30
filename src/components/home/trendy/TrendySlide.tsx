import React from "react";
import Image from "next/image";
import ArtistImage from "../../../../public/images/artist/EdSheeran.svg";
import BackgroundImage from "../../../../public/images/backgrounds/Background.png";

const TrendySlide = () => {
  return (
    <div
      className="flex w-full h-[250px] bg-[#212121] rounded-lg"
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full p-8 flex flex-col gap-7">
        <div className="flex flex-col gap-4">
          <h1 className="text-[50px] font-extrabold">Ed Sheeran</h1>
          <h3>82M views</h3>
        </div>
        <div className="flex flex-row gap-4">
          <button className="bg-green-500 px-8 py-3 rounded-full font-semibold">
            Play
          </button>
          <button className="border-2 px-8 py-3 rounded-full font-semibold">
            Follow
          </button>
        </div>
      </div>
      <div className="w-full">
        <Image
          className="h-full w-[80%]"
          width={200}
          height={200}
          src={ArtistImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default TrendySlide;
