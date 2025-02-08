"use client";
import React, { useEffect, useRef, useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import Link from "next/link";
interface IModalTable {
  setIsModalOpen: Function;
  isModalOpen: boolean;
}
const ModalTable = ({ setIsModalOpen, isModalOpen }: IModalTable) => {
  const modalRef = useRef<any>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen, setIsModalOpen]);
  return (
    <div
      className="modal-wrapper fixed z-1 left-0 top-0 w-1/5 h-screen overflow-auto"
      style={{ display: isModalOpen ? "block" : "none" }}
    >
      <div
        ref={modalRef}
        className="modal w-full h-full flex flex-col justify-start items-center !space-y-[18px] pt-[23px] bg-white"
      >
        <Link href="/">
          <div className="!w-[24px] !min-[24px] !max-[24px] !h-[24px]">
            <GridViewRoundedIcon className="w-full h-full opacity-[50%]" />
          </div>
        </Link>
        <Link href="/inbox">
          <div className="!w-[24px] !h-[24px]">
            <AiFillMessage className="w-full h-full opacity-[50%]" />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default ModalTable;
