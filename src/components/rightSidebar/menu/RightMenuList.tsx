import React, { useState, useEffect } from "react";
import RightMenuItem from "./RightMenuItem";

const RightMenuList: React.FC<TopRightSidebarInfo> = ({ title, info }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === info.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [info.length]);

  return (
    <div className={"flex flex-col"}>
      <h4 className={"text-[14px] text-[#949494] ml-[20px]"}>{title}</h4>
      <ul className={"text-[16px] font-semibold flex flex-col gap-[5px]"}>
        {
          <RightMenuItem
            key={info[currentIndex].id}
            infoData={info[currentIndex]}
          />
        }
      </ul>

      <div className="flex flex-row justify-center items-center gap-2">
        {info.map((item, index) => (
          <div key={index} className={`w-2 h-2 rounded-full ${
            currentIndex === index ? "bg-white" : "bg-gray-400"
          }`}></div>
        ))}
      </div>
    </div>
  );
};

export default RightMenuList;
