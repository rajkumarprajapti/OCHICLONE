/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { FaArrowUpLong } from "react-icons/fa6";
import React from "react";
import { VscWand } from "react-icons/vsc";
import {motion} from "framer-motion";

function LandingPage() {
  return (
    <div  data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["we create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div  className="w-fit flex overflow-hiddenflex ">
              {index === 1 && (
                  <motion.div 
                  initial = {{width:0}}
                  animate = {{width:"8vw"}}
                  transition = {{ease : [0.76, 0, 0.24, 1], duration : 2, repeat:Infinity}}
                  className="w-[8vw] h-[5vw]  mt-[10px] ml-[2px] rounded bg-[#212121] ">   
                    <img className="h-[63px] ml-[13px]" src="https://ochi.design/wp-content/themes/ochi/assets/icons/apple-touch-icon.png" alt=""  />
                  </motion.div>
                )}
                <h1 className=" text-[7vw] leading-[6.5vw] items-center h-full uppercase font-bold font-['Founders_Grotesk_X-Condensed']">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800  flex justify-between items-center py-5 px-20">
        {/* yeh niche ka section hai loop ki help se hua hai  */}
        {[
          "for public and private componies",
          "from the first pich to last pichIPO",
        ].map((item, index) => (
          <p className="text-md font-light leading-none tracking-tight  ">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-10 py-2 border-[1px] border-zinc-400 font-light text-md uppercase flex ">
            start the project
          </div>
          <div className="w-10 h-10  flex items-center justify-center border-[2px] border-zinc-500  rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
