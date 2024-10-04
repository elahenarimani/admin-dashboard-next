import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import SearchBox from "./searchBox/SearchBox";
import ActionBox from "./actionBox/ActionBox";
interface IInbox {
  id: number;
  from: string;
  subject: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  label: string;
}

const RightSide = () => {
  const inbox: IInbox[] = [
    {
      id: 1,
      from: "ali.r@gmail.com",
      subject: "یادآوری جلسه",
      message: "فراموش نکنید که جلسه ما فردا ساعت ۱۰ صبح است.",
      timestamp: "15:30",
      isRead: false,
      label: "primary",
    },
    {
      id: 2,
      from: "afsane.k@gmail.com",
      subject: "به‌روزرسانی پروژه",
      message: "پروژه به موقع تا پایان ماه آماده است.",
      timestamp: "11:46",
      isRead: false,
      label: "work",
    },
    {
      id: 3,
      from: "jamshid.h@gmail.com",
      subject: "دور همی بزودی؟",
      message:
        "سلام! مدتی است که همدیگر را ندیده‌ایم. چطور است این آخر هفته قهوه‌ای بخوریم؟",
      timestamp: "16:36",
      isRead: false,
      label: "friends",
    },
    {
      id: 4,
      from: "shabnam.h@gmail.com",
      subject: "جشن سال نو",
      message: "به جشن سال نو در خانه من بیایید!",
      timestamp: "3:25 ",
      isRead: false,
      label: "social",
    },
    {
      id: 5,
      from: "arman.t@gmail.com",
      subject: "احوالپرسی",
      message: "فقط دارم چک می‌کنم که چطوری هستی.",
      timestamp: " 13:46 ",
      isRead: false,
      label: "",
    },
  ];
  const shortMessage = (message: string, maxLength: number) => {
    if (message.length > maxLength) {
      return message.slice(0, maxLength) + "...";
    }
    return message;
  };
  return (
    <div className="w-3/4 bg-white border-[0.3px] border-solid border-[#B9B9B9] h-[840px] rounded-[5px] pt-0 mt-0">
      <div className="w-full h-[100px] flex justify-between items-center pr-[24px] pl-[24px]">
        <div className="search-wrapper">
          <SearchBox inbox={inbox} />
        </div>
        <div className="actions-wrapper">
          <ActionBox/>
        </div>
      </div>
      {inbox.map((item) => {
        return (
          <div
            key={item.id}
            className='message w-full h-[62px] border-b-[1px] border-solid border-"#EFEFEF" flex justify-start items-center'
          >
            <div className="w-[48px]  flex justify-center items-center">
              <input
                type="checkbox"
                id={`${item.id}`}
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
              <p
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
              </p>
            </div>
            <div className="w-[400px]">
              <p className="truncate">{shortMessage(item.message, 35)}</p>{" "}
            </div>
            <div className="w-[54px] h-[19px]">
              <p>{item.timestamp}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RightSide;
