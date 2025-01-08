import { motion } from 'framer-motion'
import React from 'react'

const Maqee = () => {
  
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] text-white'>
      <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
<motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}}  className='text-[10vw] uppercase pt-10 mb-[3vw] leading-none font-semibold'>We are ochi</motion.h1 >
<motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}}  className='text-[10vw] uppercase pt-10 mb-[3vw] leading-none font-semibold' >We are ochi</motion.h1 >
<motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}}  className='text-[10vw] uppercase pt-10 mb-[3vw] leading-none font-semibold' >We are ochi</motion.h1 >
      </div>
    </div>
  )
}

export default Maqee