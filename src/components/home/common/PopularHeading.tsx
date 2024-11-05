import React, { ReactNode } from "react";

interface PopularHeadingProps {
  heading: ReactNode;
}

const PopularHeading = ({ heading }: PopularHeadingProps) => {
  return (
    <div className="flex flex-row justify-between">
      <h1 className="text-2xl font-bold">{heading}</h1>
      <button className="text-sm font-semibold text-green-400 hover:text-green-300">See All</button>
    </div>
  );
};

export default PopularHeading;
