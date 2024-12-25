/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export default class Cards extends Component {
  render() {
    return (
      <div className='w-full h-screen flex gap-5 items-center  bg-zinc-900'>
        <div className="cardcontainer w-1/2 h-[50vh] px-20 ">
            <div className="card relative w-full flex items-center  justify-center rounded-xl h-full bg-[#004d43] ">
                <img className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className=' absolute text-[#cdea68] left-7 bottom-5 px-5 py-1 border-[1px] border-[#cdea68] text-sm rounded-l-full rounded-r-full'>@2019-2022</button>
            </div>
        </div>
        <div className="cardcontainer2 w-1/2 flex gap-5 px-10 h-[50vh]">
                <div className="card relative flex justify-center align-center w-1/2 h-full rounded-xl bg-[#212121] ">
                    <img className=' absolute mt-[50%] ' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className=' absolute text-white  left-7 bottom-5 px-5 py-1 border-[1px] border-white text-sm rounded-l-full rounded-r-full'>Rating5.0 OnClutch</button>  
                </div>
                <div className="card relative flex justify-center align-center w-1/2 h-full rounded-xl bg-[#212121] ">
                    <img className=' absolute h-20 w-20 mt-[40%] ' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className=' absolute text-white   bottom-5 px-5 py-1 border-[1px] border-white text-sm rounded-l-full rounded-r-full'>BUSINESS BOOTCAMP ALUMINI</button>  
                </div>
        </div>
      </div>
    )
  }
}
