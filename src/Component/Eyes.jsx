import React, { useEffect, useState } from 'react'

const Eyes = () => {
  const [rotate, setrotate] = useState(0)
  useEffect(()=>{
    window.addEventListener("mousemove",function(dets){
      let mouseX=dets.clientX;
      let mouseY= dets.clientY;
      let deltaX=mouseX-this.window.innerWidth/2
      let deltaY=mouseY-this.window.innerHeight/2
      var amg=Math.atan2(deltaY,deltaX)*(180/Math.PI)
      setrotate(amg-180)
    })
  })
  return (
    <div className='w-full h-screen overflow-hidden'>
<div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
<div className="absolute flex gap-10  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
<div className="w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
<div className="relative w-2/3 h-2/3  bg-zinc-900 rounded-full">
<div style={{transform:`translate(-50%,50%) rotate(${rotate}deg)`}} className=" absolute top-1/4 left-1/2 -translate-x-[50%] translate-y-[50%] line w-full h-10">
<div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
</div>

</div>
</div>
<div className="w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
<div className="relative w-2/3 h-2/3 flex items-center justify-center  bg-zinc-900 rounded-full">
<div style={{transform:`translate(-50%,50%) rotate(${rotate}deg)`}} className=" absolute top-1/4 left-1/2 -translate-x-[50%] translate-y-[50%] line w-full h-10">
<div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
</div>         

</div>
</div>
</div>
</div>
    </div>
  )
}

export default Eyes