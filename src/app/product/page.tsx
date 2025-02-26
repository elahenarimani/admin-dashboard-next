
import MailItem from "@/components/mainProduct/mailItem";
import React, { useContext } from "react";
// import {CompMailContext}  from "../theme-provider/ThemeContextProvider"
interface IcompEmail {
  to: string;
  subject: string;
  content: string;
  id: number;
}
export default function ProductPage() {
//   const CompX = useContext(CompMailContext)
  return (
    <div className="w-full min-h-screen  bg-[#F5F6FA]">
         {/* <MailItem/> */}
    </div>
  );
}
