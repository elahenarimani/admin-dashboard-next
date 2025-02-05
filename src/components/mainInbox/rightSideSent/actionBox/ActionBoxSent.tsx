import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa6";
import { IoMdArchive } from "react-icons/io";
import { BiSolidEnvelopeOpen } from "react-icons/bi";
import Button from "../../../button/Button";
// import {CompEmailContext}from "../../../../app/inbox/page"
import { useThemeContext } from "@/app/theme-provider/Theme-provider";
interface IcompEmail {
  to: string ;
  subject: string ;
  content: string ;
  id: number;
}
interface IActionBox {
  selectedEmails: number[];
  setSelectedEmails: Function;
}
const ActionBoxSent = ({

  selectedEmails,
  setSelectedEmails,
}: IActionBox) => {
  const { compEmail , setCompEmail} = useThemeContext()
  // const CompEmailContextX = useContext(CompEmailContext)
  const handleDelete = () => {
    const newInbox = compEmail.filter(
      (email) => !selectedEmails.includes(email.id)
    ); // Create a new array with unselected inbox
    setCompEmail(newInbox); //selected emails are removed
    setSelectedEmails([]);
  };
  return (
    <div className="w-[130px] h-[40px] grid grid-cols-3  border-[2px] border-solid border-[#EFEFEF] rounded-[12px] bg-[#F5F6FA]">
      <button className="w-full  h-full flex justify-center items-center">
        <IoMdArchive className="w-[16px] h-[16px]" />
      </button>
      <Button
        className="w-full h-full border-r-[2px] border-solid border-[#EFEFEF] flex justify-center items-center"
        onClickHandler={handleDelete}
      >
        <FaTrash className="w-[16px] h-[16px]" />
      </Button>
      <button className=" w-full h-full border-r-[2px] border-solid border-[#EFEFEF] flex justify-center items-center">
        <BiSolidEnvelopeOpen className="w-[16px] h-[16px]" />
      </button>
    </div>
  );
};
export default ActionBoxSent;
