import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { SlPencil } from "react-icons/sl";
import { BsExclamationTriangle } from "react-icons/bs";
import { TbMessageCircleStar } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
const LeftSide = () => {
  return (
    <div className="w-1/4 bg-white border-[0.3px] border-solid border-[#B9B9B9] h-[840px] rounded-[5px] pt-[24px] mt-0 pl-[25px] pr-[25px]">
      <div className="bg-[#5A8DFF] w-full h-[43px] rounded-[5px] color-white flex items-center justify-center">
        <p className="text-white ">نوشتن</p>
      </div>
      <div className="my-email flex flex-col justify-start items-start">
        <div>
          <p className="trext-[##202224] text-[16px] pt-[24px] font-medium">
            ایمیل های من
          </p>
        </div>
        <div className="email w-full h-[43px]  flex flex-row justify-between items-center pr-[16px] pt-[16px] pb-[8px]">
          <div className="flex justify-between items-center gap-[12px]">
            <div className="w-[16px] h-[15px]">
              <MdOutlineMail className="w-full h-full" />
            </div>
            <p className="text-[##202224] text-[14px]">ایمیل</p>
          </div>
          <div>
            <p className="text-[14px] text-[##202224]">211313</p>
          </div>
        </div>
        <div className="starred w-full h-[43px]  flex flex-row justify-between items-center pr-[16px] pt-[8px] pb-[8px]">
          <div className="flex justify-between items-center gap-[12px]">
            <div className="w-[16px] h-[16px]">
              <FaRegStar className="w-full h-full" />
            </div>
            <p className="text-[##202224] text-[14px]">ستاره دار</p>
          </div>
          <div>
            <p className="text-[14px] text-[##202224]">211313</p>
          </div>
        </div>
        <div className="sent w-full h-[43px]  flex flex-row justify-between items-center pr-[16px] pt-[8px] pb-[8px]">
          <div className="flex justify-between items-center gap-[12px]">
            <div className="w-[16px] h-[16px]">
              <FiSend className="w-full h-full" />
            </div>
            <p className="text-[##202224] text-[14px] whitespace-nowrap overflow-hidden text-ellipsis">
              {" "}
              ارسال شده
            </p>
          </div>
          <div>
            <p className="text-[14px] text-[##202224]">211313</p>
          </div>
        </div>
        <div className="sent w-full h-[43px]  flex flex-row justify-between items-center pr-[16px] pt-[8px] pb-[8px]">
          <div className="flex justify-between items-center gap-[12px]">
            <div className="w-[16px] h-[16px]">
              <SlPencil className="w-full h-full" />
            </div>
            <p className="text-[##202224] text-[14px] whitespace-nowrap overflow-hidden text-ellipsis">
              {" "}
              پیش نویس
            </p>
          </div>
          <div>
            <p className="text-[14px] text-[##202224]">23</p>
          </div>
        </div>
        <div className="sent w-full h-[43px]  flex flex-row justify-between items-center pr-[16px] pt-[8px] pb-[8px]">
          <div className="flex justify-between items-center gap-[12px]">
            <div className="w-[16px] h-[16px]">
              <BsExclamationTriangle className="w-full h-full" />
            </div>
            <p className="text-[##202224] text-[14px] whitespace-nowrap overflow-hidden text-ellipsis">
              باطل شده
            </p>
          </div>
          <div>
            <p className="text-[14px] text-[##202224]">23</p>
          </div>
        </div>
        <div className="sent w-full h-[43px]  flex flex-row justify-between items-center pr-[16px] pt-[8px] pb-[8px]">
          <div className="flex justify-between items-center gap-[12px]">
            <div className="w-[16px] h-[16px]">
              <TbMessageCircleStar className="w-full h-full" />
            </div>
            <p className="text-[##202224] text-[14px] whitespace-nowrap overflow-hidden text-ellipsis">
              مهم
            </p>
          </div>
          <div>
            <p className="text-[14px] text-[##202224]">23</p>
          </div>
        </div>
        <div className="sent w-full h-[43px]  flex flex-row justify-between items-center pr-[16px] pt-[8px] pb-[8px]">
          <div className="flex justify-between items-center gap-[12px]">
            <div className="w-[16px] h-[16px]">
              <RiDeleteBin6Line className="w-full h-full" />
            </div>
            <p className="text-[##202224] text-[14px] whitespace-nowrap overflow-hidden text-ellipsis">
              سطل زباله
            </p>
          </div>
          <div>
            <p className="text-[14px] text-[##202224]">23</p>
          </div>
        </div>
      </div>
      {/* <div className="label flex flex-col justify-start items-start">
        <div>
          <p className="trext-[##202224] text-[16px] pt-[24px] font-medium">
            برچسب
          </p>
        </div>
        <div className="primary"></div>
        <div className="social"></div>
        <div className="work"></div>
        <div className="friends"></div>
      </div> */}
    </div>
  );
};

export default LeftSide;
