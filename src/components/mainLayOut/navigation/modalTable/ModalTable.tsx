"use client";
import React, { useEffect, useRef, useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSearchParams } from 'next/navigation'
interface IModalTable {
  setIsModalOpen: Function;
  isModalOpen: boolean;
}
const ModalTable = ({ setIsModalOpen, isModalOpen }: IModalTable) => {
  const modalRef = useRef(null);
 const router = useRouter()
 const searchParams = useSearchParams()
  // function goToInbox(sortOrder: string){
   
  //    const params = new URLSearchParams(searchParams.toString())
  //    params.set('sort', sortOrder)
  //    window.history.pushState(null, '/inbox', `?${params.toString()}`)
  // }
 
  // function updateSorting(sortOrder: string) {
  //   const params = new URLSearchParams(searchParams.toString())
  //   params.set('sort', sortOrder)
  //   router.push('/inbox', `/inbox?${params.toString()}`) // Replaces pushState
  // }
  // useEffect(() => {
  // }, [searchParams])
  // const modalElement = modalRef.current ?? document.body;
  // function openInbox(){
  //   useEffect(() => {
  //     router.push("inbox")
  //   }, []);
  // }
  // useEffect(() => {
  //   const handleClickOutside = (event: any) => {
  //     if (modalElement.contains(event.target)) {
  //       setIsModalOpen(false);
  //     }
  //   };

  //   document.addEventListener("click", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, [isModalOpen, modalRef]); // Re-run effect on state/ref changes
  return (
    <div
      className="modal-wrapper  fixed z-1 left-0 top-0 w-1/5  h-screen overflow-auto "
      ref={modalRef}
      style={{ display: isModalOpen ? "block" : "none" }}
    >
      <div className="modal w-full h-full flex flex-col justify-start items-center !space-y-[18px] pt-[23px] bg-white ">
        <Link href="/" >
          <div className="!w-[24px] !min-[24px] !max-[24px] !h-[24px]">
            <GridViewRoundedIcon className="w-full h-full opacity-[50%] " />
          </div>
        </Link>
        <Link href="/inbox" >
          <div className="!w-[24px] !h-[24px] " >
            <AiFillMessage className="w-full h-full opacity-[50%] " />
          </div>
        
         </Link> 
      </div>
    </div>
  );
};

export default ModalTable;
