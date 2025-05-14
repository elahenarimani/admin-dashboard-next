"use client";
import React from "react";
import RightSideSent from "@/components/mainInbox/rightSideSent/RightSideSent";
import { useTheme } from "@emotion/react";
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
  const theme = useTheme();

  return (
    <div>
      <RightSideSent />
    </div>
  );
};
export default SentPage;
