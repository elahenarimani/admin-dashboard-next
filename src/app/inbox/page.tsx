// "use client"
// import LeftSide from "@/components/inbox/leftSide/LeftSide";
// import { createContext } from 'react'
// import RightSide from "@/components/inbox/rightSide/RightSide";
// import React, { useState } from "react";
// interface IcompEmail {
//   to: string;
//   subject: string ;
//   content: string ;
//   id: number;
// }
// export const CompEmailContext = createContext<{
//   compEmail: IcompEmail[];
//   setCompEmail: Function;
// } | null>(null);
// export default function InboxPage() {
//   const [compEmail, setCompEmail] = useState<IcompEmail[]>([]);
//   return (
//     <CompEmailContext.Provider value={{ compEmail, setCompEmail }}>
//       <div className="w-full min-h-screen pl-[30px] pr-[30px] bg-[#F5F6FA]">
//         <RightSide />
//       </div>
//     </CompEmailContext.Provider>
//   );
// }



import LeftSide from "@/components/mainInbox/leftSide/LeftSide";
import RightSide from "@/components/mainInbox/rightSide/RightSide";

import React from "react";
// interface IcompEmail {
//   to: string;
//   subject: string ;
//   content: string ;
//   id: number;
// }
// export const CompEmailContext = createContext<{
//   compEmail: IcompEmail[];
//   setCompEmail: Function;
// } | null>(null);
export default function InboxPage() {
  // const [compEmail, setCompEmail] = useState<IcompEmail[]>([]);
  return (
    // <CompEmailContext.Provider value={{ compEmail, setCompEmail }}>
      <div className="w-full min-h-screen  bg-[#F5F6FA]">
        <RightSide/>
        {/* <RightSideMob/> */}
      </div>
    // </CompEmailContext.Provider>
  );
}
