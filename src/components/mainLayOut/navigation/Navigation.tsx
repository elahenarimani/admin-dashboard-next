"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import "./navigatuon.css";
import { MdTableRows } from "react-icons/md";
import Button from "../../button/Button";
import ModalTable from "./modalTable/ModalTable";
const Navigation = () => {
  let [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  //  const modalRef = useRef(null);
  //   useEffect(() => {
  //     const handleClickOutside = (event: MouseEvent) => {
  
  //       if (!modalRef.current || modalRef.current === event.target) {
  //         setIsModalOpen(false);
  //       }
  //     };
  
  //     if (isModalOpen) {
      
  //       document.addEventListener("mousedown", handleClickOutside);
  //     }
  
  //     // حذف event listener بعد از unmount شدن
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [isModalOpen, setIsModalOpen]);
  return (
    <div className="  w-full !overflow-x-hidden">
      <div className="mobile lg:hidden  h-[70px]  pl-[10px] pr-[10px] ">
        <div className="w-full h-full flex flex-row justify-between items-center overflow-hidden">
          <div className="w-[22px] h-[22px]  ">
            <img className="w-full h-full rounded-[50%]" src="https://lh3.googleusercontent.com/ogw/AF2bZyhocAvZ41qG6q3uiivGLbsxF7iJu9N3HHfb0BlcGQBaReY=s32-c-mo" alt="profile-photo"/>
          </div>
          <div className="max-w-full h-[40px] flex flex-col justify-between items-start ">
            <p className="whitespace-nowrap overflow-hidden text-ellipsis font-semibold ">
                 الهه نریمانی
            </p>
            <p className="whitespace-nowrap overflow-hidden text-ellipsis text-[12px] font-medium opacity-[50%]">
              ادمین
            </p>
          </div>
          <div className="w-[18px]  h-[18px] opacity-[50%]">
            <IoSearchOutline />
          </div>
          <Button
            className="w-[18px]  h-[18px]"
            onClickHandler={() => openModal()}
          >
            <MdTableRows />
          </Button>
          {isModalOpen && (
            <ModalTable
              setIsModalOpen={setIsModalOpen}
              isModalOpen={isModalOpen}
            />
          )}
         
        </div>
      </div>
      <div className="desktop hidden lg:flex w-full h-full justify-between items-center pr-[43px]">
        <div className="profile !w-1/5 !min-w-1/5 !max-w-1/5 h-[44px] flex flex-row justify-between items-center !gap-[26px]">
          <div className="!w-[18px] !min-w-[18px] !max-w-[18px] h-[18px]">
            <IoChevronDownCircleOutline className="!w-full h-full text-[#5C5C5C]" />
          </div>
          <div className="w-auto h-full flex flex-col justify-between items-start ">
            <p className="whitespace-nowrap overflow-hidden text-ellipsis font-semibold ">
               الهه نریمانی  
            </p>
            <p className="whitespace-nowrap overflow-hidden text-ellipsis text-[12px] font-medium opacity-[50%]">
              ادمین
            </p>
          </div>
          <div className="!w-[44px] !min-w-[44px] !max-w-[44px] !h-[44px]">
            <img className="!w-full !h-full rounded-[50%]" src="https://lh3.googleusercontent.com/ogw/AF2bZyhocAvZ41qG6q3uiivGLbsxF7iJu9N3HHfb0BlcGQBaReY=s32-c-mo" alt="profile-photo" />
          </div>

        </div>
        <div className="!w-1/12 !min-w-1/12 !max-w-1/12 h-full flex justify-between items-center gap-[3px] ">
          <p className="text-[14px] opacity-[50%] font-semibold">جستجو</p>
          <div className="w-[15px] h-[15px] opacity-[50%]">
            <IoSearchOutline />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
