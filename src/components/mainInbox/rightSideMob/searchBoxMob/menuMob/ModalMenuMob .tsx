import { CompContext } from "@/app/CompProvider";
// import { useThemeContext } from "@/app/theme-provider/ThemeContextProvider";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { BsExclamationTriangle } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SlPencil } from "react-icons/sl";
import { TbMessageCircleStar } from "react-icons/tb";
interface IModalMenoMob {
  openMenoMob: boolean;
  setOpenMenoMob: Function;
}
const ModalMenuMob = ({ openMenoMob, setOpenMenoMob }: IModalMenoMob) => {
  const Compose = useContext(CompContext)
  // const { compEmail, setCompEmail } = useThemeContext();
  // const { compEmail, setCompEmail } = useThemeContext();
  // const [inpvalTo, setInpvalTo] = useState<string>("");
  // const [inpvalSubject, setInpvalSubject] = useState<string>("");
  // const [inpvalContent, setInpvalContent] = useState<string>("");
  const modalRef = useRef<any>(null);
  useEffect(() => {//close modal
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        //if ckick on mose out of modal & not click in navigation table
        setOpenMenoMob(false);
      }
    };
    if (openMenoMob) {
      window.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenoMob, setOpenMenoMob]);
  return (
    <div className="modal-wrapper w-full h-full fixed top-0 left-0 bg-opacity-50 flex justify-end  z-100">
      <div
        className="modal w-9/12 h-full  bg-white border-r-2 border-[#B9B9B9] border-solid "
        ref={modalRef}
      >
        <div className="w-full  bg-white  h-full    pl-[25px] pr-[25px] ">
          {/* <div
            className="bg-[#5A8DFF] w-full h-[43px] rounded-[5px] color-white flex items-center justify-center"
          >
            <p className="text-white ">نوشتن</p>
          </div> */}
          <div className="my-email flex flex-col justify-start items-start">
            <div>
              <p className="trext-[##202224] text-[16px] pt-[24px] font-medium ">
                ایمیل های من
              </p>
            </div>
            <div className="email w-full h-[43px]  flex flex-row justify-between items-center pr-[16px] pt-[16px] pb-[8px]">
              <Link href="/inbox/inboxMail/mail">
                <div className=" flex justify-between items-center gap-[12px]">
                  <div className="w-[16px] h-[15px]">
                    <MdOutlineMail className="w-full h-full" />
                  </div>
                  <p className="text-[##202224] text-[14px]">ایمیل</p>
                </div>
              </Link>
              <div>
                <p className="text-[14px] text-[##202224]">211313</p>
              </div>
            </div>
            <div className="starred w-full h-[43px]  flex flex-row justify-between items-center pr-[16px] pt-[8px] pb-[8px]">
              <div className="flex justify-between items-center gap-[12px]">
                <div className="w-[16px] h-[16px]">
                  <FaRegStar className="w-full h-full" />
                </div>
                <p className="text-[##202224] text-[14px]">ستاره دار</p>
              </div>
              <div>
                <p className="text-[14px] text-[##202224]">211313</p>
              </div>
            </div>
            <div
              className="sent w-full h-[43px]  flex flex-row justify-between items-center pr-[16px] pt-[8px] pb-[8px]"
            >
              <Link href="/inbox/sent">
                <div className="flex justify-between items-center gap-[12px]">
                  <div className="w-[16px] h-[16px]">
                    <FiSend className="w-full h-full" />
                  </div>
                  <p className="text-[##202224] text-[14px] whitespace-nowrap overflow-hidden text-ellipsis">
                    {" "}
                    ارسال شده
                  </p>
                </div>
              </Link>
              <div>
                <p className="text-[14px] text-[##202224]">211313</p>
              </div>
            </div>
            <div className="sent w-full h-[43px]  flex flex-row justify-between items-center pr-[16px] pt-[8px] pb-[8px]">
              <div className="flex justify-between items-center gap-[12px]">
                <div className="w-[16px] h-[16px]">
                  <SlPencil className="w-full h-full" />
                </div>
                <p className="text-[##202224] text-[14px] whitespace-nowrap overflow-hidden text-ellipsis">
                  {" "}
                  پیش نویس
                </p>
              </div>
              <div>
                <p className="text-[14px] text-[##202224]">23</p>
              </div>
            </div>
            <div className="sent w-full h-[43px]  flex flex-row justify-between items-center pr-[16px] pt-[8px] pb-[8px]">
              <div className="flex justify-between items-center gap-[12px]">
                <div className="w-[16px] h-[16px]">
                  <BsExclamationTriangle className="w-full h-full" />
                </div>
                <p className="text-[##202224] text-[14px] whitespace-nowrap overflow-hidden text-ellipsis">
                  باطل شده
                </p>
              </div>
              <div>
                <p className="text-[14px] text-[##202224]">23</p>
              </div>
            </div>
            <div className="sent w-full h-[43px]  flex flex-row justify-between items-center pr-[16px] pt-[8px] pb-[8px]">
              <div className="flex justify-between items-center gap-[12px]">
                <div className="w-[16px] h-[16px]">
                  <TbMessageCircleStar className="w-full h-full" />
                </div>
                <p className="text-[##202224] text-[14px] whitespace-nowrap overflow-hidden text-ellipsis">
                  مهم
                </p>
              </div>
              <div>
                <p className="text-[14px] text-[##202224]">23</p>
              </div>
            </div>
            <div className="sent w-full h-[43px]  flex flex-row justify-between items-center pr-[16px] pt-[8px] pb-[8px]">
              <div className="flex justify-between items-center gap-[12px]">
                <div className="w-[16px] h-[16px]">
                  <RiDeleteBin6Line className="w-full h-full" />
                </div>
                <p className="text-[##202224] text-[14px] whitespace-nowrap overflow-hidden text-ellipsis">
                  سطل زباله
                </p>
              </div>
              <div>
                <p className="text-[14px] text-[##202224]">23</p>
              </div>
            </div>
          </div>
          <div className="z-2147483647"></div>
        </div>
      </div>
    </div>
  );
};
export default ModalMenuMob;
