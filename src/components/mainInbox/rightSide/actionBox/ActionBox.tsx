import React from "react";
import { FaTrash } from "react-icons/fa6";
import { IoMdArchive } from "react-icons/io";
import { BiSolidEnvelopeOpen } from "react-icons/bi";
import Button from "../../../button/Button";
interface IInbox {
  id: number;
  from: string;
  subject: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  label: string;
}
interface IActionBox {
  inbox: IInbox[];
  setInbox: Function;
  selectedEmails: number[];
  setSelectedEmails: Function;
}
const ActionBox = ({
  inbox,
  setInbox,
  selectedEmails,
  setSelectedEmails,
}: IActionBox) => {
  const handleDelete = () => {
    setInbox(inbox.filter((email) => !selectedEmails.includes(email.id)))
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
export default ActionBox;
