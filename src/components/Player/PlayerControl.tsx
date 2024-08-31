import React from "react";
import { PiRepeatBold, PiShuffleBold } from "react-icons/pi";
import { HiMiniBackward } from "react-icons/hi2";
import { FaPlay } from "react-icons/fa";
import { HiMiniForward } from "react-icons/hi2";

const PlayerControl = () => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <button>
        <PiShuffleBold />
      </button>
      <button>
        <HiMiniBackward />
      </button>
      <button>
        <FaPlay />
      </button>
      <button>
        <HiMiniForward />
      </button>
      <button>
        <PiRepeatBold />
      </button>
    </div>
  );
};

export default PlayerControl;
