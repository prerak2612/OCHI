import React from 'react'
import image1 from "../assets/Homepage-Photo-1326x939.jpg"

function About() {
  return (
    <div style={{ color: '#212121' }} className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
        <h1 className='font-["Neue_Montreal"] text-5xl leading-[4.6vw]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className='underline'>raise funds, sell prod­ucts, ex­plain com­plex ideas</span>, and hire great peo­ple.</h1>
        <div className=' flex  w-full border-t-[1px] mt-20 border-[#a1b562] pt-10'>
            <div className='w-1/2'>
                <h1 className='text-6xl'>Our approach:</h1>
                <button className=' flex gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full text-white mt-10' >
                    READ MORE
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                    </button>

            </div>
            <img src={image1} className='w-1/2 rounded-2xl'></img>
        </div>

    </div>
  )
}

export default About