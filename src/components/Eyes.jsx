/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useRef, useState } from "react";

export default function Eyes() {
  const [rotate, setRotate] = useState(0);
  useEffect ( () =>{
    window.addEventListener("mousemove", (e)=>{
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        
        let deltaX = mouseX - window.innerWidth/2;
        let deltaY = mouseY - window.innerHeight/2;
        var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
        setRotate(angle-180);

    })
  })
   
 
  return (

      // useEffect use hoga yeh use jab hota hai jub website puri loaded ho jati hai 


    <div className="eyes w-full h-screen overflow-hidden ">
      <div data-scroll data-scroll-speed="-.7" className='w-full relative h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        {/* starting image ke uppar 2 circle  */}
        <div className="absolute flex gap-20 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  ">
          <div className="w-[15vw] rounded-full flex items-center justify-center h-[15vw] bg-zinc-100 ">
            {/* eyes ka black content  */}
            <div className="w-2/3 h-2/3 rounded-full relative items-center justify-center bg-zinc-900">
              {/* eye ke andar play wawla section  */}
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg) `}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 ">
              <div className="w-10 h-10  rounded-full bg-zinc-100">
              </div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] flex items-center justify-center rounded-full h-[15vw] bg-zinc-100 ">
            {/* eyes ka black content  */}
            <div className="w-2/3 h-2/3 flex items-center relative justify-center rounded-full bg-zinc-900">
              {/* eye ke andar play wawla section  */}
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg) `}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 ">
              <div className="w-10 h-10  rounded-full bg-zinc-100">
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
