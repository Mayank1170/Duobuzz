import React, { useEffect, useState } from "react";
import PopularReleaseCard from "./PopularReleaseCard";
import PopularHeading from "../common/PopularHeading";
import apiClient from "@/spotify";

const PopularRelease = () => {
  const [popular, setPopular] = useState([]);
  
  useEffect(() => {
    apiClient.get("/browse/new-releases").then((res: any) => {
      setPopular(res.data.albums.items);
    });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <PopularHeading heading={"New Release"} />
      <div
        className="h-[25vh] flex flex-row flex-wrap gap-4 overflow-hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {popular.map((item: any) => (
          <PopularReleaseCard
            key={item.id}  // Add a unique key for each item
            image={item.images[0].url}
            name={item.name}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularRelease;
