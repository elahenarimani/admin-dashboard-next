"use client";
import React, { useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
interface IModalTable{
    modalRef:{}
}
const ModalTable = ({modalRef}:IModalTable) => {
  return (
    <div className="modal-wrapper  fixed z-1 left-0 top-0 w-1/5  h-screen overflow-auto " ref={modalRef} >
        <div className="modal w-full h-full flex flex-col justify-start items-center !space-y-[18px] pt-[23px] bg-white ">
      <div className="!w-[24px] !min-[24px] !max-[24px] !h-[24px]">
        <GridViewRoundedIcon className="w-full h-full opacity-[50%] " />
      </div>
      <div className="!w-[24px] !h-[24px] ">
        <AiFillMessage className="w-full h-full opacity-[50%] " />
      </div>
    </div>
    </div>
  );
};

export default ModalTable;
