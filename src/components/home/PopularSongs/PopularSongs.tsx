import React from "react";
import PopularHeading from "../common/PopularHeading";
import PopularSongCard from "./PopularSongCard";

const PopularSongs = () => {
  return (
    <div>
      <PopularHeading heading="Popular Songs" />
      <PopularSongCard/>
    </div>
  );
};

export default PopularSongs;
