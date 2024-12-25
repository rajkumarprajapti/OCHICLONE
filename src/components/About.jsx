/* eslint-disable no-unused-vars */
import { FaArrowUpLong } from "react-icons/fa6";
import React from 'react'

export default function About() {
  return (
    <div className='w-full bg-[#cdea68] py-20 rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[3.5vw] tracking-tight pl-10">Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className="w-full   flex  border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
        <h1 className='text-4xl ml-[120px] font-medium'> Our approach: </h1>
     <button className='uppercase px-5 py-3 bg-zinc-900 mt-6 items-center ml-[120px] flex gap-10 rounded-full text-white mt-[10vw] text-[12px]'>Read more
        <div className='w-3 h-3 bg-zinc-100 rounded-full '>
        <FaArrowUpLong />
        </div>
     </button>
        </div>
        <div className="w-[50vw] h-[70vh] mt-20 mr-[40px]  rounded-3xl bg-zinc-900">
            <img className="rounded-lg" src="src/images/Homepage-Photo-1326x939.jpg" alt="" />
        </div>
    </div>
    </div>
  )
}
