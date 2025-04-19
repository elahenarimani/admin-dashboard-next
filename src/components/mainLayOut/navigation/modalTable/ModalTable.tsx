"use client";
import React, { useEffect, useRef, useState, ReactElement } from "react";
import { AiFillMessage } from "react-icons/ai";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import Link from "next/link";
import { MdTableRows } from "react-icons/md";
import { IoCubeSharp } from "react-icons/io5";
interface IModalTable {
  setIsModalOpen: Function;
  isModalOpen: boolean;
}
interface ISidebar {
  href: string;
  icon: ReactElement;
}
const ModalTable = ({ setIsModalOpen, isModalOpen }: IModalTable) => {
  const [activeItem, setActiveitem] = useState<ISidebar[]>([
    {
      href: "/",
      icon: (
        <div className="!w-[24px] !min-[24px] !max-[24px] !h-[24px]">
          <GridViewRoundedIcon className="w-full h-full text-[#B2B2B2] " />
        </div>
      ),
    },
    {
      href: "/inbox",
      icon: (
        <div className="!w-[24px] !min-[24px] !max-[24px] !h-[24px]">
          <AiFillMessage className="w-full h-full text-[#B2B2B2]" />
        </div>
      ),
    },
    {
      href: "/product",
      icon: (
        <div className="!w-[24px] !min-[24px] !max-[24px] !h-[24px]">
          <IoCubeSharp  className="w-full h-full text-[#B2B2B2]" />
        </div>
      ),
    },
  ]);
  const modalRef = useRef<any>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        //if ckick on mose out of modal & not click in navigation table
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
        {activeItem.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default ModalTable;
