import React from 'react'

const About = () => {
  return (
    <div className= 'w-full p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-[Neue_Montreal] text-[3.5vw] leading-[4.4vw]'> Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
    <div className='w-full flex gap-5 border-t-[2px] pt-7 mt-20 border-[#76863a]'>
    <div className="w-1/2  ">
    <h1 className='text-7xl'>Our approach:</h1>
    <button className='w-32 flex uppercase items-center  gap-8 mt-6 px-18 py-4 bg-[#212121] rounded-full text-white'>read more
        <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
    </button>
    </div>
    <div className="w-1/2 h-[70vh] bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')] rounded-2xl"></div>
    </div>
  
    </div>
  )
}

export default About