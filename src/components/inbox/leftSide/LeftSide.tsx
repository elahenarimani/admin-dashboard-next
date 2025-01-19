"use client";
import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { SlPencil } from "react-icons/sl";
import { BsExclamationTriangle } from "react-icons/bs";
import { TbMessageCircleStar } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LiaTimesSolid } from "react-icons/lia";
import Input from "../../input/Input";
import "./leftSide.css";
import Link from "next/link";
const LeftSide = () => {
  interface IcompEmail {
    to: string | number;
    subject: string | number;
    content: string | number;
    id: number;
  }
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [inpvalTo, setInpvalTo] = useState<string>("");
  const [inpvalSubject, setInpvalSubject] = useState<string>("");
  const [inpvalContent, setInpvalContent] = useState<string>("");
  const toggleCompose = () => setIsOpen(!isOpen);
  const [compEmail, setCompEmail] = useState<IcompEmail[]>([]);
  console.log(isOpen);
  function sentBox() {
    console.log(inpvalTo);
    setCompEmail([
      ...compEmail,
      {
        to: inpvalTo,
        subject: inpvalSubject,
        content: inpvalContent,
        id: Date.now(),
      },
    ]);
    console.log(inpvalTo);
    setIsOpen(false);
    setInpvalTo("");
    setInpvalSubject("");
    setInpvalContent("");
  }
  {
    console.log(compEmail);
  }
  return (
    <div className="w-1/4 bg-white border-[0.3px] border-solid border-[#B9B9B9] h-[840px] rounded-[5px] pt-[24px] mt-0 pl-[25px] pr-[25px] ">
      <div
        className="bg-[#5A8DFF] w-full h-[43px] rounded-[5px] color-white flex items-center justify-center"
        onClick={toggleCompose}
      >
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
          <Link href="inbox/sent">
            <div className="flex justify-between items-center gap-[12px]">
              <div className="w-[16px] h-[16px]">
                <FiSend className="w-full h-full" />
              </div>
              <p className="text-[##202224] text-[14px] whitespace-nowrap overflow-hidden text-ellipsis">
                {" "}
                ارسال شده
              </p>
            </div>
          </Link>
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
      {isOpen && (
        <div className="compose-wrapper w-[600px] h-[500px] bg-white z-1000000000000000000000 right-[30px] bottom-0 fixed rounded-t-[10px]">
          <div className="w-full h-[40px] bg-[#F2F6FC] flex justify-between items-center pl-[15px] pr-[15px] rounded-t-[10px]">
            <p>پیام جدید</p>
            <div
              className="w-[20px] h-[20px] cursor-pointer"
              onClick={toggleCompose}
            >
              <LiaTimesSolid className="w-full h-full text-[#6E7172]" />
            </div>
          </div>
          <div className="to w-full h-[40px] pl-[15px] pr-[15px]">
            <div className="w-full h-full border-b[#F2F6FC] border-solid border-b-[1px] flex justify-start items-center ">
              <p className="text-[#B5B7B6]">گیرنده</p>
              <div className="flex-grow pl-[10px]">
                <Input
                  value={inpvalTo}
                  inputHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInpvalTo(e.target.value)
                  }
                  className="input-comp w-full h-full  pr-[10px] pl-[10px]  outline-none border-none  "
                  placeholder=""
                  ariaLabel="گیرنده"
                  type="email"
                />
              </div>
            </div>
          </div>
          <div className="subject w-full h-[40px] pl-[15px] pr-[15px]">
            <div className="w-full h-full border-b[#F2F6FC] border-solid border-b-[1px] flex justify-start items-center ">
              <p className=" text-[#B5B7B6]">موضوع</p>
              <div className="flex-grow pl-[10px]">
                {/*to item stretch*/}
                <Input
                  value={inpvalSubject}
                  inputHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInpvalSubject(e.target.value)
                  }
                  className="w-full h-full pr-[10px] pl-[10px] outline-none border-none "
                  placeholder=""
                  ariaLabel="موضوع"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-[330px] pl-[15px] pr-[15px]">
            <textarea
              value={inpvalContent}
              onChange={(e: any) => setInpvalContent(e.target.value)}
              className="w-full h-full    outline-none border-none resize-none"
              placeholder=""
              required
            />
          </div>
          <div className="flex justify-end pl-[30px]">
            <div
              className="w-[100px] h-[40px]  bg-[#1B61D1] text-white text-center rounded-[30px] flex justify-center items-center cursor-pointer"
              onClick={sentBox}
            >
              <p>ارسال</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftSide;
