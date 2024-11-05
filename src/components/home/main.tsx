import React from "react";
import TrendySlide from "./trendy/TrendySlide";
import PopularReleases from "./PopularRelease/popularRelease";
import PopularSongs from "./PopularSongs/PopularSongs";

const Home = () => {
  return (
    <div
      className="flex flex-col justify-center items-center mx-6 overflow-scroll"
      style={{ scrollbarWidth: "none" }}
    >
      <TrendySlide />
      <div
        className="w-full flex max-h-[40vh] flex-col gap-[16px] overflow-scroll pt-[16px]"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="w-full">
          <PopularReleases />
        </div>
        <div className="w-full">
          <PopularSongs />
        </div>
      </div>
    </div>
  );
};

export default Home;
