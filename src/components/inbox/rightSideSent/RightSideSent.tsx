"use client"
import React, { useContext, useState } from 'react'
import { CiStar } from "react-icons/ci";
// import SearchBoxSent from "../../../components/inbox/rightSideSent/SearchBoxSent/SearchBoxSent";
import SearchBoxSent from "../../../components/inbox/rightSideSent/SearchBoxSent/SearchBoxSent"
import ActionBoxSent from "../../../components/inbox/rightSideSent/actionBox/ActionBoxSent";
import {CompEmailContext}from "../../../app/inbox/page"

const RightSideSent = () => {
    const CompEmailContextX = useContext(CompEmailContext)
     const [selectedEmails, setSelectedEmails] = useState<number[]>([]);
     const shortMessage = (message: string, maxLength: number) => {
        if (message.length > maxLength) {
          return message.slice(0, maxLength) + "...";
        }
        return message;
      };
      const handleCheckboxChange = (emailId: number) => {
        if (selectedEmails.includes(emailId)) {
          setSelectedEmails(selectedEmails.filter((id) => id !== emailId)); //remove from selectedEmails
        } else {
          setSelectedEmails([...selectedEmails, emailId]); //add to selectedEmails
        }
      };
  return (
    <div className="w-full bg-white border-[0.3px] border-solid border-[#B9B9B9] h-[844px] rounded-[5px] pt-0 mt-0">
    <div className="w-full h-[100px] flex justify-between items-center pr-[24px] pl-[24px]">
      <div className="search-wrapper">
        {/* <SearchBoxSent /> */}
      </div>
      <div className="actions-wrapper">
        <ActionBoxSent
        //   inbox={inbox}
        //   setInbox={setInbox}
          selectedEmails={selectedEmails}
          setSelectedEmails={setSelectedEmails}
        />
      </div>
    </div>
    {CompEmailContextX?.compEmail.map((item) => {
      return (
        <div
          key={item.id}
          className='message w-full h-[62px] border-b-[1px] border-solid border-"#EFEFEF" flex justify-start items-center'
        >
          <div className="w-[48px]  flex justify-center items-center">
            <input
              aria-label="search"
              type="checkbox"
              id={`${item.id}`}
              onClick={() => handleCheckboxChange(item.id)}
              className="w-[16px] h-[16px]"
            />
          </div>
          <div className='w-[48px]  flex justify-center items-center text-"#EFEFEF" '>
            <CiStar className="w-[20px] h-[20px]" />
          </div>
          <div className="w-[100px] flex justify-start items-center text-[14px]">
            {" "}
            <p className="truncate">{item.subject}</p>
          </div>
          <div className="w-[100px] flex justify-center items-center text-[14px] ">
            {/* <p
              className={`w-[60px] h-[22px] text-center pt-[2px] ${
                item.label === "primary"
                  ? "bg-[#CCF0EB]"
                  : item.label === "work"
                  ? "bg-[#FFEBDD]"
                  : item.label === "friends"
                  ? "bg-[#F6DDFF]"
                  : item.label === "social"
                  ? "bg-[#DEE8FF]"
                  : "bg-transparent"
              }`}
            >
              {item.label}
            </p> */}
          </div>
          <div className="w-[400px]">
            <p className="truncate">{shortMessage(item.content, 35)}</p>{" "}
          </div>
          <div className="w-[54px] h-[19px]">
            {/* <p>{item.timestamp}</p> */}
          </div>
        </div>
      );
    })}
  </div>
  )
}

export default RightSideSent



