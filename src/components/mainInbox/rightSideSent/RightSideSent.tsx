"use client";
import React, { useContext, useState } from "react";
import { CiStar } from "react-icons/ci";
import ActionBoxSent from "./actionBoxSent/ActionBoxSent";
import { CompContext } from "@/app/CompProvider";
import SearchBoxSent from "./SearchBoxSent/SearchBoxSent";
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
interface IInbox {
  id: number;
  from: string;
  subject: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  label: string;
}
const RightSideSent = () => {
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
  // const { compEmail, setCompEmail } = useThemeContext();
  const [selectedEmails, setSelectedEmails] = useState<number[]>([]);
  const Compose = useContext(CompContext);

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
      <div className="mobile inbox-wrapper block sm:hidden w-full h-full pt-[15px]">
        {Compose?.compEmail.map((item) => {
          return (
            <div
              className="w-full h-[100px] flex flex-col justify-between items-start  pt-[15px] pb-[15px] pl-[32px] pr-[32px]"
              key={item.id}
            >
              <div className="w-full flex flex-col justify-between gap-[20px] border-b-2 border-gray-300">
                <div className="w-full flex flex-row justify-between items-start gap-[40px]">
                  <div>{item?.subject}</div>
                  {/* <div className="truncate">{item?.content}</div> */}
                </div>
                <div className="w-full flex flex-row justify-between gap-[40px]">
                  <div
                    className="w-[48px]  text-right"
                    onClick={() =>
                      setSelectedEmails([...selectedEmails, item.id])
                    }
                  >
                    <input
                      aria-label="search"
                      type="checkbox"
                      id={`${item.id}`}
                      className="w-[16px] h-[16px]"
                    />
                  </div>
                  <div className="truncate">{item?.content}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="hidden sm:block w-full bg-white border-[0.3px] border-solid border-[#B9B9B9] h-[844px] rounded-[5px] pt-0 mt-0">
        <div className="w-full h-[100px] flex justify-between items-center pr-[24px] pl-[24px]">
          <div className="search-wrapper">
            <SearchBoxSent />
          </div>
          <div className="actions-wrapper">
            <ActionBoxSent
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
      </div>
    </div>
  );
};
export default RightSideSent;
