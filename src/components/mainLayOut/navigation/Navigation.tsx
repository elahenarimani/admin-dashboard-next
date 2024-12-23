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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="mobile lg:hidden w-full h-[70px] pl-[24px] pr-[24px]">
        <div className="w-full h-full flex flex-row justify-between items-center">
          <div className="!w-[22px]  !h-[22px] bg-gray-600 rounded-[50%]">
            <div className="!w-full !h-full"></div>
          </div>
          <div className="w-auto h-[40px] flex flex-col justify-between items-start ">
            <p className="whitespace-nowrap overflow-hidden text-ellipsis font-semibold ">
              ا رضا نریمانی زاده
            </p>
            <p className="whitespace-nowrap overflow-hidden text-ellipsis text-[12px] font-medium opacity-[50%]">
              ادمین
            </p>
          </div>
          {/* <div className="w-[18px]  h-[18px]">
            <IoChevronDownCircleOutline className="!w-full h-full text-[#5C5C5C]" />
          </div> */}
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
        <div className="profile !w-1/ !min-w-1/5 !max-w-1/5 h-[44px] flex flex-row justify-between items-center !gap-[26px]">
          <div className="!w-[18px] !min-w-[18px] !max-w-[18px] h-[18px]">
            <IoChevronDownCircleOutline className="!w-full h-full text-[#5C5C5C]" />
          </div>
          <div className="w-auto h-full flex flex-col justify-between items-start ">
            <p className="whitespace-nowrap overflow-hidden text-ellipsis font-semibold ">
              اااااااااامممممممممحمد رضا نریمانی زاده
            </p>
            <p className="whitespace-nowrap overflow-hidden text-ellipsis text-[12px] font-medium opacity-[50%]">
              ادمین
            </p>
          </div>
          <div className="!w-[44px] !min-w-[44px] !max-w-[44px] !h-[44px] bg-gray-600 rounded-[50%]">
            <div className="!w-full !h-full"></div>
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
