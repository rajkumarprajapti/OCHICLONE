/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion, useAnimation } from 'framer-motion';


export default function Featured() {

        const cards = [useAnimation(), useAnimation()];
        const handleHover = () =>{
          cards[index].start({y:"0"})
        };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-10">
        <h1 className='font-["Neue_Montreal"] pb-10 text-6xl tracking-tight'>
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-20 mt-10 ">
          <motion.div 
          onHoverStart={()=>handleHover(0)}
          onHoverEnd={()=> handleHoverEnd(0)}
          className="cardcontainer relative w-1/2 h-[75vh]  ">
            {/* image ke uppar ka text hai  */}
            <h1 className="absolute left-full flex overflow-hidden -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#cdea68] z-[9] leading-none tracking-tight text-8xl">
            {"FYDE".split(" ").map((item, index) =>( 
                  <motion.span 
                  initial = {{y:"100%"}}
                  animate = {cards[0]}
                  transition={{
                    ease:[0.22,1,0.36,1],
                    delay:index* 0.05,
                  }}
                   className="inline-block"
                     >
                      {item}
                      </motion.span>
              ))}
            </h1>
            <div className=" card w-full h-full rounded-xl overflow-hidden bg-green-800">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div className="cardcontainer relative w-1/2 h-[75vh]  ">
            {/* image ke uppar ka text hai  */}
            <h1 className="absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#cdea68] z-[9] leading-none tracking-tight text-8xl">
              {"VISE".split(" ").map((item, index) =>( 
                    <motion.span 
                    initial = {{y:"100%"}}
                    animate = {cards[1]}
                    transition={{
                      ease:[0.22,1,0.36,1],
                      delay:index* 0.05,
                    }}
                     className="inline-block"
                       >
                        {item}
                        </motion.span>
              ))}
            </h1>

            <div className=" card w-full h-full rounded-xl overflow-hidden bg-green-800">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
