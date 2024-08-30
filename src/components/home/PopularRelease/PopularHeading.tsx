import React from "react";

const PopularHeading = () => {
  return (
    <div className="flex flex-row justify-between">
      <h1 className="text-2xl font-bold">Popular Release</h1>
      <button className="text-sm font-semibold text-green-400 hover:text-green-300">See All</button>
    </div>
  );
};

export default PopularHeading;
