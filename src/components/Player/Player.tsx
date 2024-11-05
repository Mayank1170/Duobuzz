import React from 'react'
import PlayerInfo from './PlayerInfo'
import PlayerControl from './PlayerControl'
import PlayerVolume from './PlayerVolume'

const Player = () => {
  return (
    <div
    className="h-[80px] flex flex-row justify-between items-center p-2 relative"
    style={{ backgroundColor: "#121212A9" }}
  >
        <div 
          className="absolute top-0 left-0 right-0 h-[2px] bg-gray-600 cursor-pointer"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const width = rect.width;
            const percentage = (x / width) * 100;
            // Here you would update the current time of the song
          }}
        >
          <div 
            className="h-full bg-white"
            style={{ width: '37.2%' }} 
          ></div>
        </div>
        <PlayerInfo/>
        <PlayerControl/>
        <PlayerVolume/>
    </div>
  )
}

export default Player
