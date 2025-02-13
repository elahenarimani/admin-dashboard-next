"use client";
import { CompContext } from "@/app/CompProvider";
import { kMaxLength } from "buffer";
import React, { useContext, useEffect, useState } from "react";
interface IInbox {
  id: number;
  from: string;
  subject: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  label: string;
}

const MailItem = () => {
  
  const Compose = useContext(CompContext);
  const [compModalOpen , setCompModalOpen] = useState<Boolean>(false)
  
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
  
  // const changeComp = () => {
  //   if (Compose?.compEmail == undefined) {
  //     console.log("i am true")
  //     return  Compose?.setCompEmail([])
     
  //   }
  //   console.log("i am false")
  //   return Compose?.compEmail;
  // };
  // changeComp()
  const shortMessage = (message: string, messageMaxLength: number) => {
    if (message.length > messageMaxLength) {
      return message.slice(0, messageMaxLength) + "...";
    } else {
      return message;
    }
  };
  function exe(){
    console.log(Compose?.compEmail);
  }
  exe()


  return (
   <div className="w-full ">
      <div className="mobile-size block sm:hidden w-full h-full px-[32px]">
        <div className="w-full flex flex-col justify-start items-start ">
          {inbox.map((item) => {
            return (
              <div
                className="w-full h-full grid grid-cols-2  justify-start border-b-2 border-solid bborder-[#F2F6FC] gap-[20px] py-[24px]"
                key={item.id}
              >
                <div>{item.timestamp}</div>
                <div className=" w-full justify-self-end truncate">
                  {shortMessage(item.from, 15)}
                </div>
                <div className="truncate ">{item.message}</div>
              </div>
            );
          })}
          <div className="w-[100px] h-[40px] fixed x-1 bottom-[32px] right-[30px] bg-[#1B61D1] text-white  rounded-[30px] flex justify-center items-center cursor-pointer"
          onClick={() => setCompModalOpen(true)}>
            <p>ارسال</p>
          </div>
        </div>
      </div>

      <div className="desktop-size hidden sm:block w-full  min-h-screen overflow-y-auto bg-white border-[0.3px] border-solid border-[#B9B9B9] rounded-[5px] ">
        {inbox.map((item) => {
          return (
            <div
              className="w-full h-[80px] flex flex-row justify-start items-center border-b-[1px] border-solid border-[#EFEFEF] px-[30px] "
              key={item.id}
            >
              <div className="basis-[150px] truncate">{item.message}</div>
              <div className="w-[100px]">
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
              <div className="truncate grow">{shortMessage(item.message, 38)}</div>
              <div className=" basis-[40px]">{item.timestamp}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MailItem;
