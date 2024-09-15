import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
        <div className='cardcontainer1 h-[50vh] w-1/2'>
            <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
                <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'/>
                <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 border-[#CDEA67] text-[#CDEA67]'>&copy;2019-2022</button>
            </div>
        </div>
        <div className='cardcontainer1 flex gap-5 w-1/2 h-[50vh]'>
        <div className='card relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center'>
            <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'/>
            <button className='absolute px-2 py-1 border-2 rounded-full left-10 bottom-10 text-xs hover:bg-white hover:text-black transition duration-300 ease-in-out'>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className='card relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center'>
            <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'/>
            <button className='absolute px-2 py-1 border-2 rounded-full left-6 bottom-10 text-xs hover:bg-white hover:text-black transition duration-300 ease-in-out'>BUSINESS BOOTCAMP ALUMNI</button>

        </div>
        </div>
    </div>
  )
}

export default Cards