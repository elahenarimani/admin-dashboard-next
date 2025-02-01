"use client"
import LeftSide from "../../components/inbox/leftSide/LeftSide";
import RightSide from "@/components/inbox/rightSide/RightSide";
import SearchBoxMob from "@/components/inbox/rightSide/searchBox/SearchBoxMob";
import React from "react";
interface Iprops {
  children: React.ReactNode;
}
export default function InboxLayout({ children }: Iprops) {
  return (
    <div>
      <div className="inbox w-full min-h-screen pl-[30px] pr-[30px] bg-[#F5F6FA]">
        <p className="hidden sm:block text-[32px] mt-[30px] mb-[23px]">صندوق ورودی</p>
        <div className="mobile sm:hidden">
          <SearchBoxMob/>
        </div>
        <div className="desktop hidden sm:flex w-full min-h-screen justify-start items-start gap-[30px] pt-0 mt-0 ">
          <LeftSide />
          <main className="w-3/4 h-full flex-grow"> {children}</main>
        </div>
      </div>
    </div>
  );
}
