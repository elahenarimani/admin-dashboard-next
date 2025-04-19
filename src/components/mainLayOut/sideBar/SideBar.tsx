"use client";
import React, { ReactElement, useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { MdTableRows } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCubeSharp } from "react-icons/io5";
interface ISidebar {
  href: string;
  icon: ReactElement;
}
const SideBar = () => {
  const [activeItem, setActiveitem] = useState<ISidebar[]>([
    {
      href: "/",
      icon: (
        <div className="!w-[24px] !h-[24px] mb-[4px]">
          <GridViewRoundedIcon className="w-full h-full " />
        </div>
      ),
    },
    {
      href: "/inbox",
      icon: (
        <div className="!w-[24px] !h-[24px] ">
          <AiFillMessage className="w-full h-full " />
        </div>
      ),
    },
    {
      href: "/product",
      icon: (
        <div className="!w-[24px]  !h-[24px] ">
          <IoCubeSharp  className="w-full h-full" />
        </div>
      ),
    },
  ]);
  const pathname = usePathname();
  return (
    <ul className="w-full h-full flex flex-col justify-start items-center !space-y-[8px] pt-[23px] pr-[5px] pl-[5px]">
      {activeItem.map((item) => (
        <li
          className={`w-full h-[30px] flex !justify-center !items-center text-[#B2B2B2] ${
            pathname == item.href
              ? " !text-[#4880FF]  "
              : 'text-""'
          }`}
          key={item.href}
        >
          <Link href={item.href}>{item.icon}</Link>
        </li>
      ))}
    </ul>
  );
};
export default SideBar;
