import React from "react";
import { IoVolumeHigh } from "react-icons/io5";

const PlayerVolume = () => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <div className="text-sm text-gray-400">1:45/4:42</div>
      <button>
        <IoVolumeHigh />
      </button>
      <input
        type="range"
        min="0"
        max="100"
        defaultValue="100"
        className="w-24 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
        style={{
          background: 'linear-gradient(to right, white 0%, white 100%, #4B5563 100%)',
          WebkitAppearance: 'none'
        }}
        onChange={(e) => {
          const volume = parseInt(e.target.value);
          e.target.style.background = `linear-gradient(to right, white 0%, white ${volume}%, #4B5563 ${volume}%)`;
          if (volume === 0) {
            console.log('Volume is muted');
          } else if (volume === 100) {
            console.log('Volume is at maximum');
          } else {
            console.log(`Volume set to ${volume}%`);
          }
        }}
      />

    </div>
  );
};

export default PlayerVolume;
