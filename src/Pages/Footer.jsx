import React from 'react'
import logo from '../IMG/DezLogo.png'
import { GoArrowUpRight } from 'react-icons/go'
import { IoLocationOutline } from 'react-icons/io5'
export default function Footer() {
  return (
    <>
      <div className='border-t-[1.5px] border-[#020c315d] w-full
      '>
        <div className='container w-full flex justify-between items-center mt-[80px] mb-[50px] max-md:flex-wrap max-md:justify-center'>
          <div className='w-[300px] h-[90px] max-md:w-[200px] max-md:h-[70px]'>
            <img src={logo} alt="" />
          </div>
          <div>
            <div className='flex justify-start items-center gap-[20px] max-md:gap-[10px] mb-[15px]'>
              <div className='rounded-[8px] flex justify-center items-center text-[22px] w-[45px] h-[45px] border border-[#CCC] max-md:w-[30px] max-md:h-[30px] max-md:text-[19px]'>
                <IoLocationOutline />
              </div>
              <div className='flex justify-start items-center gap-[20px] max-md:gap-[5px] max-md:text-[12px]'>
                <p>Узбекистан, город Ташкент</p>
                <GoArrowUpRight />
              </div>
            </div>
            <div className='flex justify-start items-center gap-[20px] max-md:gap-[10px]'>
              <div className='rounded-[8px] flex justify-center items-center text-[22px] w-[45px] h-[45px] border border-[#CCC] max-md:w-[30px] max-md:h-[30px] max-md:text-[19px]'>
                <IoLocationOutline />
              </div>
              <div className='flex justify-start items-center gap-[20px] max-md:gap-[5px] max-md:text-[12px]'>
                <p>+998 99 119 99 33</p>
                <GoArrowUpRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
