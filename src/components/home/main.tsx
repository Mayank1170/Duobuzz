import React from 'react'
import TrendySlide from "./trendy/TrendySlide"
import PopularReleases from "./PopularRelease/popularRelease"

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-6 gap-[16px]'>
      <TrendySlide/>
      <div className='w-full'>
        <PopularReleases />
      </div>
    </div>
  )
}

export default Home
