"use client";
import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import SearchBox from "./searchBox/SearchBox";
import ActionBox from "./actionBox/ActionBox";
import "./rightSide.css";
import SearchBoxMob from "../rightSideMob/searchBoxMob/SearchBoxMob";
import { TiPencil } from "react-icons/ti";
import { LiaTimesSolid } from "react-icons/lia";
import Input from "../../input/Input";
import { useThemeContext } from "@/app/theme-provider/Theme-provider";
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
  const { compEmail, setCompEmail } = useThemeContext();
  const [selectedEmails, setSelectedEmails] = useState<number[]>([]); //Just get the ID for deleting the email
  const [isOpenComp , setIsOpenComp] = useState<Boolean>(false);
  const [inpvalTo, setInpvalTo] = useState<string>("");
  const [inpvalSubject, setInpvalSubject] = useState<string>("");
  const [inpvalContent, setInpvalContent] = useState<string>("");
  const [inbox, setInbox] = useState<IInbox[]>([
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
      label: "friends",
    },
    {
      id: 6,
      from: "sara.m@gmail.com",
      subject: "پیگیری سفارش",
      message: "آیا سفارش من ارسال شده است؟ لطفاً اطلاع دهید.",
      timestamp: "12:30",
      isRead: false,
      label: "primary",
    },
    {
      id: 7,
      from: "support@amazon.com",
      subject: "تأیید خرید",
      message: "سفارش شما با موفقیت ثبت شد.",
      timestamp: "08:45",
      isRead: true,
      label: "primary",
    },
    {
      id: 8,
      from: "ali.n@gmail.com",
      subject: "سوال درباره پروژه",
      message: "آیا می‌توانیم فردا درباره پروژه صحبت کنیم؟",
      timestamp: "17:15",
      isRead: false,
      label: "work",
    },
    {
      id: 9,
      from: "newsletter@udemy.com",
      subject: "تخفیف ویژه",
      message: "دوره‌های جدید با 50% تخفیف!",
      timestamp: "19:10",
      isRead: true,
      label: "social",
    },
    {
      id: 10,
      from: "friend@example.com",
      subject: "برنامه آخر هفته",
      message: "آیا دوست داری این هفته به کوه برویم؟",
      timestamp: "15:00",
      isRead: false,
      label: "friends",
    },
    {
      id: 11,
      from: "hamid.t@gmail.com",
      subject: "تحویل مدارک",
      message: "لطفاً مدارک را تا فردا ارسال کنید.",
      timestamp: "09:50",
      isRead: false,
      label: "work",
    },
    {
      id: 12,
      from: "sale@nike.com",
      subject: "حراج پایان فصل",
      message: "همه محصولات با 30% تخفیف!",
      timestamp: "20:05",
      isRead: true,
      label: "social",
    },
  ]);

  const shortMessage = (message: string, maxLength: number) => {
    if (message.length > maxLength) {
      return message.slice(0, maxLength) + "...";
    }
    return message;
  };

  const toggleCompose = () => setIsOpenComp(!isOpenComp);
  function sentBox() {
    console.log(inpvalTo);
    setCompEmail([
      ...compEmail,
      {
        to: inpvalTo,
        subject: inpvalSubject,
        content: inpvalContent,
        id: Date.now(),
      },
    ]);

    setIsOpenComp(false);
    setInpvalTo("");
    setInpvalSubject("");
    setInpvalContent("");
  }
  {
    console.log(compEmail);
    console.log(inpvalTo);
    console.log(inpvalSubject);
    console.log(inpvalContent);
    console.log(useThemeContext);
  }
  return (
    <div>
      <div className="mobile inbox-wrapper block sm:hidden w-full h-full pl-[32px] pr-[32px] pt-[15px]">
        <div className="compose-wrapper-mob w-full h-full  z-2147483647  ">
          {isOpenComp && (
            <div className="compose-mob top-[70px]  fixed  bg-white rounded-t-[10px] flex flex-col justify-start items-start">
              <div className="w-full h-[40px] bg-[#F2F6FC] flex justify-between items-center pl-[15px] pr-[15px] rounded-t-[10px]">
                <p>پیام جدید</p>
                <div
                  className="w-[20px] h-[20px] cursor-pointer"
                  onClick={toggleCompose}
                >
                  <LiaTimesSolid className="w-full h-full text-[#6E7172]" />
                </div>
              </div>
              <div className="to w-full h-[40px] pl-[15px] pr-[15px]">
                <div className="w-full h-full border-b[#F2F6FC] border-solid border-b-[1px] flex flex-row justify-start items-center ">
                  <p className="text-[#B5B7B6]">گیرنده</p>
                  <div className="flex-grow pl-[10px]">
                    <Input
                      value={inpvalTo}
                      inputHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setInpvalTo(e.target.value)
                      }
                      className="input-comp w-full h-full  pr-[10px] pl-[10px]  outline-none border-none  "
                      placeholder=""
                      ariaLabel="گیرنده"
                      type="email"
                    />
                  </div>
                </div>
              </div>
              <div className="subject w-full h-[40px] pl-[15px] pr-[15px]">
                <div className="w-full h-full border-b[#F2F6FC] border-solid border-b-[1px] flex justify-start items-center ">
                  <p className=" text-[#B5B7B6]">موضوع</p>
                  <div className="flex-grow pl-[10px]">
                    {/*to item stretch*/}
                    <Input
                      value={inpvalSubject}
                      inputHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setInpvalSubject(e.target.value)
                      }
                      className="w-full h-full pr-[10px] pl-[10px] outline-none border-none "
                      placeholder=""
                      ariaLabel="موضوع"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="content w-full min-h-[430px] pl-[15px] pr-[15px]">
                <textarea
                  value={inpvalContent}
                  onChange={(e: any) => setInpvalContent(e.target.value)}
                  className="w-full h-full    outline-none border-none resize-none"
                  placeholder=""
                  required
                />
              </div>
              <div className="w-full h-[40px] flex flex-row justify-end pl-[10px]">
                <div
                  className="w-[100px] h-[40px]  bg-[#1B61D1] text-white text-center rounded-[30px] flex justify-center items-center cursor-pointer"
                  onClick={sentBox}
                >
                  <p>ارسال</p>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* {isOpenComp ? 
          (<SearchBoxMob inbox={inbox} className="z-0" />)
        : (<SearchBoxMob inbox={inbox} />)} */}
        <div className="search-wrapper w-full z-0">
        <SearchBoxMob inbox={inbox} />
        </div>
        
        <div className="actions-wrapper flex justify-end pt-[10px]">
          <ActionBox
            inbox={inbox}
            setInbox={setInbox}
            selectedEmails={selectedEmails}
            setSelectedEmails={setSelectedEmails}
          />
        </div>
        {inbox.map((item) => {
          return (
            <div
              className="w-full h-[100px] flex flex-col justify-between items-start border-b-2 border-gray-300 pt-[15px] pb-[15px]"
              key={item.id}
            >
              <div className="w-full flex flex-col justify-between gap-[20px]">
                <div className="w-full flex flex-row justify-between items-start gap-[40px]">
                  <div>{item.timestamp}</div>
                  <div className="truncate">{item.from}</div>
                </div>
                <div className="w-full flex flex-row justify-between gap-[40px]">
                  <div className="w-[48px]  text-right">
                    <input
                      aria-label="search"
                      type="checkbox"
                      id={`${item.id}`}
                      onClick={() =>
                        setSelectedEmails([...selectedEmails, item.id])
                      }
                      className="w-[16px] h-[16px]"
                    />
                  </div>
                  <div className="truncate">{item.message}</div>
                </div>
              </div>
            </div>
          );
        })}
        {isOpenComp ? (
          <div className="fixed-compose hidden"></div>
        ) : (
          <div
            className="fixed-compose w-[100px] h-[43px]  fixed bottom-[10px] right-[15px] flex justify-center items-center bg-[#74C0FC]  rounded-[15px] gap-[5px] pointer"
            onClick={toggleCompose}
          >
            <TiPencil className="w-[20px] h-[20px]" />
            <p>نوشتن</p>
          </div>
        )}
      </div>
      {/* <div className="inbox-wrapper block sm:hidden w-full h-full pl-[32px] pr-[32px] pt-[15px]">
        <SearchBoxMob inbox={inbox} />
        {inbox.map((item) => {
          return (
            <div
              className="w-full h-[100px] flex flex-col justify-between items-start border-b-2 border-gray-300 pt-[15px] pb-[15px]"
              key={item.id}
            >
              <div className="w-full flex flex-col justify-between gap-[20px]">
                <div className="w-full flex flex-row justify-between items-start gap-[40px]">
                  <div>{item.timestamp}</div>
                  <div className="truncate">{item.from}</div>
                </div>
                <div className="w-full flex flex-row justify-between gap-[40px]">
                  <div className="w-[48px]  text-right">
                    <input
                      aria-label="search"
                      type="checkbox"
                      id={`${item.id}`}
                      onClick={() => handleCheckboxChange(item.id)}
                      className="w-[16px] h-[16px]"
                    />
                  </div>
                  <div className="truncate">{item.message}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
      <div className="hidden sm:block w-full bg-white border-[0.3px] border-solid border-[#B9B9B9] h-[844px] rounded-[5px] pt-0 mt-0">
        <div className="w-full h-[100px] flex justify-between items-center pr-[24px] pl-[24px]">
          <div className="search-wrapper w-full">
            <SearchBox inbox={inbox} />
          </div>
          <div className="actions-wrapper">
            <ActionBox
              inbox={inbox}
              setInbox={setInbox}
              selectedEmails={selectedEmails}
              setSelectedEmails={setSelectedEmails}
            />
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
                  aria-label="search"
                  type="checkbox"
                  id={`${item.id}`}
                  onClick={() =>
                    setSelectedEmails([...selectedEmails, item.id])
                  }
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
    </div>
  );
};
export default RightSide;
