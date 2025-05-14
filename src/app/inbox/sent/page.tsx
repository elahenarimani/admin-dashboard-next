"use client";
import React from "react";
import RightSideSent from "@/components/mainInbox/rightSideSent/RightSideSent";
interface ISentPage {
  inpvalTo: string;
  inpvalSubject: string;
  inpvalContent: string;
  id: number;
  params?: { sent: string };
}
export default function SentPage({
  inpvalTo,
  inpvalSubject,
  inpvalContent,
  id,
  params,
}: ISentPage) {
  return (
    <div>
      <RightSideSent />
    </div>
  );
}
