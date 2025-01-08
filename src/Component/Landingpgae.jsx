import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";
const Landingpgae = () => {
  return (
    <div className='w-full h-screen pt-1'>
        <div className="taxtstructer mt-52 px-20">
          {["We create","Eye-opening","presentation"].map((item,index)=>{
            return<div className="masker ">
              <div className="w-full flex items-center">
            {index===1 && (<div className='w-[9vw] h-[5.5vw] bg-red-500 mr-2 relative rounded '></div>)}
            <h1 className='uppercase text-[7.5vw] leading-[6vw] tracking-tight font-medium font-["Founder_Grotesk_"]'>{item}</h1>
        </div>
        </div>
          })}
        </div>
        <div className='border-t-[1px] border-b-black mt-28 flex justify-between items-center py-5 px-20 uppercase'>
{["For public and private companies","from the first pitch to last pitch to IPO"].map((item,index)=>(
    <p className='text-md font-dark tracking-tight leading-none'>{item}</p>
))}
<div className="stated flex gap-5" >
    <div className="px-5 py-2 border-[1px] border-b-black rounded-full font-dark text-sm capitalize">Start the project</div>
    <div className="w-10 h-10 flex items-center justify-center border-[1px] border-b-black rounded-full">
  <span className='rotate-[45deg]'>
  <FaLongArrowAltUp />
  </span>
    </div>
</div>

        </div>
    </div>
  )
}

export default Landingpgae