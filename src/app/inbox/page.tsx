
import LeftSide from "@/components/inbox/leftSide/LeftSide";
import RightSide from "@/components/inbox/rightSide/RightSide";
import React from "react";

const InboxPage = () => {
  return (
    <div className="inbox w-full h-full   pl-[30px] pr-[30px] bg-[#F5F6FA]">
      <p className="text-[32px] mt-[30px] mb-[23px]">صندوق ورودی</p>
     <div className="w-full h-full flex justify-between items-start gap-[30px] pt-0 mt-0">
     <LeftSide/>
     <RightSide />
     
     </div>
    </div>
  );
};

export default InboxPage;
