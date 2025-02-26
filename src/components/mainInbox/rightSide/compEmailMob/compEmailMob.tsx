// import React, { useState } from 'react'
// import { LiaTimesSolid } from 'react-icons/lia';

// const compEmailMob = () => {
//     const [isOpenComp, setIsOpenComp] = useState<Boolean>(false);
//     const toggleCompose = () => {
//         setIsOpenComp(!isOpenComp);
//         console.log("it is toggle");
//       };
//   return (
//     <div>
//       <div className="compose-mob top-[70px]  fixed  bg-white rounded-t-[10px] flex flex-col justify-start items-start">
//               <div className="w-full h-[40px] bg-[#F2F6FC] flex justify-between items-center pl-[15px] pr-[15px] rounded-t-[10px]">
//                 <p>پیام جدید</p>
//                 <div
//                   className="w-[20px] h-[20px] cursor-pointer"
//                   onClick={() => toggleCompose()}
//                 >
//                   <LiaTimesSolid className="w-full h-full text-[#6E7172]" />
//                 </div>
//               </div>
//               <div className="to w-full h-[40px] pl-[15px] pr-[15px]">
//                 <div className="w-full h-full border-b[#F2F6FC] border-solid border-b-[1px] flex flex-row justify-start items-center ">
//                   <p className="text-[#B5B7B6]">گیرنده</p>
//                   <div className="flex-grow pl-[10px]">
//                     {/* <Input
//                       value={inpvalToMob}
//                       inputHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
//                         setInpvalToMob(e.target.value)
//                       }
//                       className="input-comp w-full h-full  pr-[10px] pl-[10px]  outline-none border-none  "
//                       placeholder=""
//                       ariaLabel="گیرنده"
//                     /> */}
//                     <input
//                       value={inpvalTo}
//                       onChange={(e: any) => setInpvalTo(e.target.value)}
//                       className="input-comp w-full h-full  pr-[10px] pl-[10px]  outline-none border-none  "
//                       placeholder=""
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="subject w-full h-[40px] pl-[15px] pr-[15px]">
//                 <div className="w-full h-full border-b[#F2F6FC] border-solid border-b-[1px] flex justify-start items-center ">
//                   <p className=" text-[#B5B7B6]">موضوع</p>
//                   <div className="flex-grow pl-[10px]">
//                     {/* <Input
//                       value={inpvalSubjectMob}
//                       inputHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
//                         setInpvalSubjectMob(e.target.value)
//                       }
//                       className="w-full h-full pr-[10px] pl-[10px] outline-none border-none "
//                       placeholder=""
//                       ariaLabel="موضوع"
//                     /> */}
//                     <input
//                       value={inpvalSubject}
//                       onChange={(e: any) => setInpvalSubject(e.target.value)}
//                       className="w-full h-full pr-[10px] pl-[10px] outline-none border-none "
//                       placeholder=""
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="content w-full min-h-[430px] pl-[15px] pr-[15px]">
//                 <textarea
//                   value={inpvalContent}
//                   onChange={(e: any) => setInpvalContent(e.target.value)}
//                   className="w-full h-full    outline-none border-none resize-none"
//                   placeholder=""
//                   required
//                 />
//               </div>
//               <div
//                 className="w-full h-[40px] flex flex-row justify-end pl-[10px]"
//                 onClick={() => sentBoxMob()}
//               >
//                 <div className="w-[100px] h-[40px]  bg-[#1B61D1] text-white text-center rounded-[30px] flex justify-center items-center cursor-pointer">
//                   <p>ارسال</p>
//                 </div>
//               </div>
//             </div>
//     </div>
//   )
// }

// export default compEmailMob;
