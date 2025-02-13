"use client";
import React, { useContext, useState } from "react";
import { CiStar } from "react-icons/ci";
import SearchBoxSent from "../../../components/mainInbox/rightSideSent/SearchBoxSent/SearchBoxSent";
import ActionBoxSent from "../../../components/mainInbox/rightSideSent/actionBox/ActionBoxSent";
// import { useThemeContext } from "@/app/theme-provider/ThemeContextProvider";
import { CompContext } from "@/app/CompProvider";
interface IcompEmail {
  to: string;
  subject: string;
  content: string;
  id: number;
}
interface IRightSideSent {
  to: string;
  subject: string;
  content: string;
}

// const RightSideSent = ({to , subject , content  }: IRightSideSent ) => {
const RightSideSent = () => {
  // const { compEmail, setCompEmail } = useThemeContext();
  const [selectedEmails, setSelectedEmails] = useState<number[]>([]);
   const Compose = useContext(CompContext)
  // const [elahe, setElahe] = useState<IcompEmail[]>([
  //   {
  //     to: "dddnarimani",
  //     subject: "sddd",
  //     content: "ffffg",
  //     id: 1,
  //   },
  // ]);
  const shortMessage = (content: string, maxLength: number) => {
    if (content.length > maxLength) {
      return content.slice(0, maxLength) + "...";
    }
    return content;
  };
  const handleCheckboxChange = (emailId: number) => {
    if (selectedEmails.includes(emailId)) {
      setSelectedEmails(selectedEmails.filter((id) => id !== emailId)); //remove from selectedEmails
    } else {
      setSelectedEmails([...selectedEmails, emailId]); //add to selectedEmails
    }
  };
  return (
    <div className="w-full ">
      <div className="block sm:hidden w-full  bg-white border-[0.3px] border-solid border-[#B9B9B9] h-[844px] rounded-[5px] pt-0 mt-0">
        <p>jjjjjjjjjjjjjjjjjjjjjjj</p>
        <div className="w-full h-[100px] flex justify-between items-center pr-[24px] pl-[24px]">
          <div className="search-wrapper">
            {/* <SearchBoxSent inbox={inbox}/> */}
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
        {Compose?.compEmail.map((item) => {
          return (
            <div
              key={item.id}
              className='message w-full h-[62px] border-b-[1px] border-solid border-"#EFEFEF" flex justify-start items-center'
            >
              <div className="w-[48px]  flex justify-center items-center">
                <input
                  aria-label="search"
                  type="checkbox"
                  id={`${item?.id}`}
                  onClick={() => handleCheckboxChange(item?.id)}
                  className="w-[16px] h-[16px]"
                />
              </div>
              <div className='w-[48px]  flex justify-center items-center text-"#EFEFEF" '>
                <CiStar className="w-[20px] h-[20px]" />
              </div>
              <div className="w-[100px] flex justify-start items-center text-[14px]">
                {" "}
                <p className="truncate pl-[50px]">{item?.subject}</p>
              </div>
              <div className="w-[400px]">
                <p className="truncate">{shortMessage(item?.content, 35)}</p>{" "}
                {/* <p className="truncate">{content}</p>{" "} */}
              </div>
            </div>
          );
        })}
         <p>jjjjjjjjjjjjjjjjjjjjjjj</p>
      </div>
      <div className="hidden sm:block w-full bg-white border-[0.3px] border-solid border-[#B9B9B9] h-[844px] rounded-[5px] pt-0 mt-0">
        <div className="w-full h-[100px] flex justify-between items-center pr-[24px] pl-[24px]">
          <div className="search-wrapper">
            {/* <SearchBoxSent inbox={inbox}/> */}
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
        {Compose?.compEmail.map((item) => {
          return (
            <div
              key={item.id}
              className='message w-full h-[62px] border-b-[1px] border-solid border-"#EFEFEF" flex justify-start items-center'
            >
              <div className="w-[48px]  flex justify-center items-center">
                <input
                  aria-label="search"
                  type="checkbox"
                  id={`${item?.id}`}
                  onClick={() => handleCheckboxChange(item?.id)}
                  className="w-[16px] h-[16px]"
                />
              </div>
              <div className='w-[48px]  flex justify-center items-center text-"#EFEFEF" '>
                <CiStar className="w-[20px] h-[20px]" />
              </div>
              <div className="w-[100px] flex justify-start items-center text-[14px]">
                {" "}
                <p className="truncate pl-[50px]">{item?.subject}</p>
              </div>
              <div className="w-[400px]">
                <p className="truncate">{shortMessage(item?.content, 35)}</p>{" "}
                {/* <p className="truncate">{content}</p>{" "} */}
              </div>
            </div>
          );
        })}
        {/* {elahe.map((item) => {
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
              <p className="truncate">{item.subject}</p>
            </div>
            <div className="w-[400px]">
              <p className="truncate">{shortMessage(item.content, 35)}</p>{" "}
            </div>
          </div>
        );
      })} */}
      </div>
    </div>
  );
};
export default RightSideSent;
