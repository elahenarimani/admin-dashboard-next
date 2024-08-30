
import LeftSide from "@/components/inbox/leftSide/LeftSide";
import RightSide from "@/components/inbox/rightSide/RightSide";
import React from "react";

const InboxPage = () => {
  return (
    <div className="inbox w-full h-full   pl-[30px] pr-[30px]">
      <p className="text-[32px]   mt-[30px] mb-[23px]">صندوق ورودی</p>
     <div className="flex justify-between items-center">
     <RightSide />
     <LeftSide/>
     </div>
    </div>
  );
};

export default InboxPage;
