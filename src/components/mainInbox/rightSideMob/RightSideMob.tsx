// "use client";
// import React, { useContext, useEffect, useState } from "react";
// import { CiStar } from "react-icons/ci";

// import "./rightSideMob.css";
// import SearchBoxMob from "../rightSideMob/searchBoxMob/SearchBoxMob";
// import { TiPencil } from "react-icons/ti";
// import { LiaTimesSolid } from "react-icons/lia";
// import Input from "../../input/Input";
// import { CompContext } from "@/app/CompProvider";
// import ActionBox from "../rightSide/actionBox/actionBox";
// interface IInbox {
//   id: number;
//   from: string;
//   subject: string;
//   message: string;
//   timestamp: string;
//   isRead: boolean;
//   label: string;
// }
// const RightSideMob = () => {
//   const Compose = useContext(CompContext);
//   console.log(CompContext);
//   console.log(Compose);
//   const [selectedEmails, setSelectedEmails] = useState<number[]>([]); //Just get the ID for deleting the email
//   const [isOpenComp, setIsOpenComp] = useState<Boolean>(false);
//   const [inpvalTo, setInpvalTo] = useState<string>("");
//   const [inpvalSubject, setInpvalSubject] = useState<string>("");
//   const [inpvalContent, setInpvalContent] = useState<string>("");
//   // Compose?.setCompEmail([])
//   const [inbox, setInbox] = useState<IInbox[]>([
//     {
//       id: 1,
//       from: "ali.r@gmail.com",
//       subject: "یادآوری جلسه",
//       message: "فراموش نکنید که جلسه ما فردا ساعت ۱۰ صبح است.",
//       timestamp: "15:30",
//       isRead: false,
//       label: "primary",
//     },
//     {
//       id: 2,
//       from: "afsane.k@gmail.com",
//       subject: "به‌روزرسانی پروژه",
//       message: "پروژه به موقع تا پایان ماه آماده است.",
//       timestamp: "11:46",
//       isRead: false,
//       label: "work",
//     },
//     {
//       id: 3,
//       from: "jamshid.h@gmail.com",
//       subject: "دور همی بزودی؟",
//       message:
//         "سلام! مدتی است که همدیگر را ندیده‌ایم. چطور است این آخر هفته قهوه‌ای بخوریم؟",
//       timestamp: "16:36",
//       isRead: false,
//       label: "friends",
//     },
//     {
//       id: 4,
//       from: "shabnam.h@gmail.com",
//       subject: "جشن سال نو",
//       message: "به جشن سال نو در خانه من بیایید!",
//       timestamp: "3:25 ",
//       isRead: false,
//       label: "social",
//     },
//     {
//       id: 5,
//       from: "arman.t@gmail.com",
//       subject: "احوالپرسی",
//       message: "فقط دارم چک می‌کنم که چطوری هستی.",
//       timestamp: " 13:46 ",
//       isRead: false,
//       label: "friends",
//     },
//     {
//       id: 6,
//       from: "sara.m@gmail.com",
//       subject: "پیگیری سفارش",
//       message: "آیا سفارش من ارسال شده است؟ لطفاً اطلاع دهید.",
//       timestamp: "12:30",
//       isRead: false,
//       label: "primary",
//     },
//     {
//       id: 7,
//       from: "support@amazon.com",
//       subject: "تأیید خرید",
//       message: "سفارش شما با موفقیت ثبت شد.",
//       timestamp: "08:45",
//       isRead: true,
//       label: "primary",
//     },
//     {
//       id: 8,
//       from: "ali.n@gmail.com",
//       subject: "سوال درباره پروژه",
//       message: "آیا می‌توانیم فردا درباره پروژه صحبت کنیم؟",
//       timestamp: "17:15",
//       isRead: false,
//       label: "work",
//     },
//     {
//       id: 9,
//       from: "newsletter@udemy.com",
//       subject: "تخفیف ویژه",
//       message: "دوره‌های جدید با 50% تخفیف!",
//       timestamp: "19:10",
//       isRead: true,
//       label: "social",
//     },
//     {
//       id: 10,
//       from: "friend@example.com",
//       subject: "برنامه آخر هفته",
//       message: "آیا دوست داری این هفته به کوه برویم؟",
//       timestamp: "15:00",
//       isRead: false,
//       label: "friends",
//     },
//     {
//       id: 11,
//       from: "hamid.t@gmail.com",
//       subject: "تحویل مدارک",
//       message: "لطفاً مدارک را تا فردا ارسال کنید.",
//       timestamp: "09:50",
//       isRead: false,
//       label: "work",
//     },
//     {
//       id: 12,
//       from: "sale@nike.com",
//       subject: "حراج پایان فصل",
//       message: "همه محصولات با 30% تخفیف!",
//       timestamp: "20:05",
//       isRead: true,
//       label: "social",
//     },
//   ]);
//   // useEffect (() => {
//   //   if(Compose?.compEmail == undefined){
//   //      Compose?.setCompEmail([])

//   //   return Compose?.setCompEmail([...Compose?.compEmail])
//   // }
//   // } , [Compose?.compEmail , Compose?.setCompEmail])
//   // if(!(Compose?.compEmail)){
//   //   let x = Compose?.compEmail
//   //   return {x : []}
//   // }
//   const shortMessage = (message: string, maxLength: number) => {
//     if (message.length > maxLength) {
//       return message.slice(0, maxLength) + "...";
//     }
//     return message;
//   };
//   const toggleCompose = () => {
//     setIsOpenComp(true);
//     console.log("it is toggle");
//   };
//   const sentBoxMob = () => {
//     console.log("elahe");
//     Compose?.setCompEmail([
//       ...Compose?.compEmail,
//       {
//         to: inpvalTo,
//         subject: inpvalSubject,
//         content: inpvalContent,
//         id: Date.now(),
//       },
//     ]);
//     // Compose?.setCompEmail([{ to:"asd", subject:"hi" ,content:"goodbye" ,id:Date.now()} ])
//     console.log(Compose?.compEmail);
//     console.log(inpvalTo);
//     console.log(inpvalSubject);
//     console.log(inpvalContent);
//     setIsOpenComp(false);
//     setInpvalTo("");
//     setInpvalSubject("");
//     setInpvalContent("");
//   };
//   console.log(Compose?.compEmail);
//   console.log(inpvalTo);
//   console.log(inpvalSubject);
//   console.log(inpvalContent);
//   return (
//     <div>
//       <div className="mobile inbox-wrapper block sm:hidden w-full h-full ">
//         {/* <div className="compose-mob-wrapper w-full h-screen fixed top-0 right-0 opacity-50 bg-black flex justify-center items-center   "> */}
//           {/* {isOpenComp && ( */}
//             <div className="compose-mob-wrapper w-full h-screen fixed top-0 right-0 opacity-50 bg-black flex justify-center items-center">
//               <div className="compose-mob-content min-w-10/12 flex flex-col justify-start items-center bg-white opacity-20 rounded-[10px]">
//                 <div className="w-full h-[40px] bg-[#F2F6FC] flex justify-between items-center pl-[15px] pr-[15px] rounded-t-[10px]">
//                   <p>پیام جدید</p>
//                   <div
//                     className="w-[20px] h-[20px] cursor-pointer"
//                     onClick={() => toggleCompose()}
//                   >
//                     <LiaTimesSolid className="w-full h-full text-[#6E7172]" />
//                   </div>
//                 </div>
//                 <div className="to w-full h-[40px] pl-[15px] pr-[15px]">
//                   <div className="w-full h-full border-b[#F2F6FC] border-solid border-b-[1px] flex flex-row justify-start items-center ">
//                     <p className="text-[#B5B7B6]">گیرنده</p>
//                     <div className="flex-grow pl-[10px]">
//                       {/* <Input
//                       value={inpvalToMob}
//                       inputHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
//                         setInpvalToMob(e.target.value)
//                       }
//                       className="input-comp w-full h-full  pr-[10px] pl-[10px]  outline-none border-none  "
//                       placeholder=""
//                       ariaLabel="گیرنده"
//                     /> */}
//                       <input
//                         value={inpvalTo}
//                         onChange={(e: any) => setInpvalTo(e.target.value)}
//                         className="input-comp w-full h-full  pr-[10px] pl-[10px]  outline-none border-none  "
//                         placeholder=""
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="subject w-full h-[40px] pl-[15px] pr-[15px]">
//                   <div className="w-full h-full border-b[#F2F6FC] border-solid border-b-[1px] flex justify-start items-center ">
//                     <p className=" text-[#B5B7B6]">موضوع</p>
//                     <div className="flex-grow pl-[10px]">
//                       {/* <Input
//                       value={inpvalSubjectMob}
//                       inputHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
//                         setInpvalSubjectMob(e.target.value)
//                       }
//                       className="w-full h-full pr-[10px] pl-[10px] outline-none border-none "
//                       placeholder=""
//                       ariaLabel="موضوع"
//                     /> */}
//                       <input
//                         value={inpvalSubject}
//                         onChange={(e: any) => setInpvalSubject(e.target.value)}
//                         className="w-full h-full pr-[10px] pl-[10px] outline-none border-none "
//                         placeholder=""
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="content w-full min-h-[430px] pl-[15px] pr-[15px]">
//                   <textarea
//                     value={inpvalContent}
//                     onChange={(e: any) => setInpvalContent(e.target.value)}
//                     className="w-full h-full    outline-none border-none resize-none"
//                     placeholder=""
//                     required
//                   />
//                 </div>
//                 <div
//                   className="w-full h-[40px] flex flex-row justify-end pl-[10px]"
//                   onClick={() => sentBoxMob()}
//                 >
//                   <div className="w-[100px] h-[40px]  bg-[#1B61D1] text-white text-center rounded-[30px] flex justify-center items-center cursor-pointer">
//                     <p>ارسال</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           {/* )} */}
//         {/* </div> */}
//         <div className="search-wrapper w-full  pl-[32px] pr-[32px]">
//           <SearchBoxMob inbox={inbox} />
//         </div>
//         <div className="actions-wrapper flex justify-end pt-[10px] pl-[32px] pr-[32px]">
//           <ActionBox
//             inbox={inbox}
//             setInbox={setInbox}
//             selectedEmails={selectedEmails}
//             setSelectedEmails={setSelectedEmails}
//           />
//         </div>
//         {inbox.map((item) => {
//           return (
//             <div
//               className="w-full h-[100px] flex flex-col justify-between items-start  pt-[15px] pb-[15px] pl-[32px] pr-[32px]"
//               key={item.id}
//             >
//               <div className="w-full flex flex-col justify-between gap-[20px] border-b-2 border-gray-300">
//                 <div className="w-full flex flex-row justify-between items-start gap-[40px]">
//                   <div>{item.timestamp}</div>
//                   <div className="truncate">{item.from}</div>
//                 </div>
//                 <div className="w-full flex flex-row justify-between gap-[40px]">
//                   <div
//                     className="w-[48px]  text-right"
//                     onClick={() =>
//                       setSelectedEmails([...selectedEmails, item.id])
//                     }
//                   >
//                     <input
//                       aria-label="search"
//                       type="checkbox"
//                       id={`${item.id}`}
//                       className="w-[16px] h-[16px]"
//                     />
//                   </div>
//                   <div className="truncate">{item.message}</div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//         {isOpenComp ? (
//           <div className="fixed-compose hidden"></div>
//         ) : (
//           <div
//             className=" fixed-compose w-[100px] h-[43px]  fixed bottom-[10px] right-[15px] flex justify-center items-center bg-[#74C0FC]  rounded-[15px] gap-[5px] pointer"
//             onClick={() => toggleCompose()}
//           >
//             <TiPencil className="w-[20px] h-[20px]" />
//             <p>نوشتن</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default RightSideMob;
