/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className=" w-full py-20 rounded-3xl  bg-[#004d43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap gap-15">
        <motion.h1 
         initial = {{x:"0"}}
         animate = {{x:"-100%"}}
         transition = {{ease : "linear", duration : 10}}
         
        className='text-[20vw] leading-none font-["Founders_Grotesk_X_Condensed"] -mb-[7vw] font-semibold uppercase pt-10'>
          we are ochi
        </motion.h1>
        <motion.h1
          initial = {{x:"0"}}
          animate = {{x:"-100%"}}
          transition = {{ease : "linear", duration : 10}}
         className='text-[20vw] leading-none font-["Founders_Grotesk_X_Condensed"] -mb-[7vw] font-semibold uppercase pt-10'>
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
