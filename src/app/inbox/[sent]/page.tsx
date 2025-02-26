"use client"
import RightSideSent from "@/components/mainInbox/rightSideSent/RightSideSent";
import { useTheme } from "@emotion/react";
import React, { useContext } from "react";



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
  const theme = useTheme()

  return (
    <div>
          <RightSideSent            // key={item.id}
          />
    </div>
  );
};
export default SentPage;
