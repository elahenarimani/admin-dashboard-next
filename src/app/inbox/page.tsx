
import LeftSide from "@/components/inbox/leftSide/LeftSide";
import RightSide from "@/components/inbox/rightSide/RightSide";
import React from "react";

const InboxPage = () => {
  const user =[
    {
      inbox : [],
      sent : [],
      draft : []
    }
  ]
  const inbox = [
    {
      id: 1,
      from: 'ali.r@gmail.com',
      subject: 'Hello!',
      message: 'go to gym',
      timestamp: '2023-10-03 10:30:00',
      isRead: false,
    },
    {
      id: 2,
      from: 'afsane.k@gmail.com',
      subject: "Got Gmail? This'll be eeeasy.",
      message: 'Move your Fitbit profile to a Google Account to securely access your favorite Google essentials, now including Fitbit.¹',
      timestamp: '2023-11-30 11:46:00',
      isRead: false,
    },
    {
      id: 3,
      from: 'jamshid.h@gmail.com',
      subject: "We’ve updated our Terms of Service and Privacy Policy",
      message: "We continually strive to give our users clear information about how Strava operates and control over what they share on the platform. This year, we’ve made some changes to our Terms of Service, Privacy Policy, Legal Bases, and Cookie Policy. Here are some highlights:",
      timestamp: '2023-9-15 4:36:00',
      isRead: false,
    }
  ];
  const sent = [
    {
      id: 1,
      to: 'sahar.m@gmail.com',
      subject: 'Hot wire ignition Apparatus',
      message: "The SCR ELEKTRONIKS Heated Wire Tester is used for testing Ignition of Materials by Hot Wire Sources as per ASTM D 3874. As suggested by the standard, Heated Wire Tester is designed to evaluate a material’s ability to resist ignition when exposed to abnormally high temperatures.",
      timestamp: '2024-10-02 12:00:00',
    },
    {
      id: 2,
      to: 'maryam.n@gmail.com',
      subject: 'arc ignition',
      message: "The high current arc ignition tester may determine how well an electrical or electronic device, home appliance, or material can withstand an arc. The device functions by simulating electric leakage on the insulator, which might result in varying polarizations of live components or between live components and grounded (earthed) metal components. This tool may also evaluate the insulator’s arc resistance performance at the specified voltage.",
      timestamp: '2024-01-02 04:57:00',
    },
  ];
  const drafts = [
    {
      id: 1,
      to: 'shahab.n@gmail.com',
      subject: 'Draft Email',
      message: 'This is fist draft message',
    },
    {
      id: 2,
      to: 'shabnam.n@gmail.com',
      subject: 'Draft Email',
      message: 'This is second draft message',
    }
  ];
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
