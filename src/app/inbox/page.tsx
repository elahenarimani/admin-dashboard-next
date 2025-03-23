import RightSide from '../../components/mainInbox/rightSide/rightSide'
// import RightSideMob from "@/components/mainInbox/rightSideMob/RightSideMob";

import React from "react";
interface IcompEmail {
  to: string;
  subject: string;
  content: string;
  id: number;
}
export default function InboxPage(){
  return (
    <div className="w-full min-h-screen  bg-[#F5F6FA]">
      <RightSide/>
      {/* <RightSideMob/> */}
    </div>
  );
}