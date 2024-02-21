
import React from 'react'

const VideoTitle = ( {title , overview}) => {
  return (
    <div className='pt-[25%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'  >
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-white p-4 px-12 text-xl text-black rounded-lg hover:bg-opacity-80' > Play</button>
            <button className=" p-4 px-12 mx-2  text-xl text-black bg-opacity-50 rounded-lg bg-gray-500 ">More Info</button>


        </div>



    </div>
  )
}

export default VideoTitle