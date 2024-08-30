import React from "react";
import PopularReleaseCard from "./PopularReleaseCard";
import PopularHeading from "./PopularHeading";

const popularRelease = () => {
  return (
    <div className="flex flex-col gap-4">
      <PopularHeading />
      <PopularReleaseCard />
    </div>
  );
};

export default popularRelease;
