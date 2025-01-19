"use client"
import RightSideSent from "@/components/inbox/rightSideSent/RightSideSent";
import React, { useContext } from "react";
import { CompEmailContext } from "../../../app/inbox/page";
import { ImInsertTemplate } from "react-icons/im";
interface ISentPage {
    inpvalTo: string;
    inpvalSubject: string;
    inpvalContent: string;
  id: number;
  params?: { sent: string };
}
const SentPage = ({
  inpvalTo,
  inpvalSubject,
  inpvalContent,
  id,
  params,
}: ISentPage) => {

  const CompEmailContextX = useContext(CompEmailContext)
  // const pathName = usePathname()
  // console.log(pathName)
  return (
    <div>
      {CompEmailContextX?.compEmail.map((item) => {
        return (
          <RightSideSent
            key={item.id}
            inpvalTo={item.to}
            inpvalSubject={item.subject}
            inpvalContent={item.content}
            id={item.id}
          />
        );
      })}
    </div>
  );
};
export default SentPage;
