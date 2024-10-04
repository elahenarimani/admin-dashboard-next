import React from 'react'
import { FaTrash } from "react-icons/fa6";
import { IoMdArchive } from "react-icons/io";
import { BiSolidEnvelopeOpen } from "react-icons/bi";
const ActionBox = () => {
  return (
    <div className='w-[130px] h-[40px] flex justify-start items-center border-[2px] border-solid border-[#EFEFEF] rounded-[12px] bg-[#F5F6FA]'>
      <div className='w-full h-full flex justify-center items-center'><IoMdArchive className='w-[16px] h-[16px]'/></div>
      <div className='w-full h-full border-r-[2px] border-solid border-[#EFEFEF] flex justify-center items-center'><FaTrash  className='w-[16px] h-[16px]'/></div>
      <div className=' w-full h-full border-r-[2px] border-solid border-[#EFEFEF] flex justify-center items-center' ><BiSolidEnvelopeOpen  className='w-[16px] h-[16px]'/></div>
    </div>
  )
}

export default ActionBox
