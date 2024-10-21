import React from "react";
// import { RxDashboard } from "react-icons/rx";
// import "./sideBar.css"
import { AiFillMessage } from "react-icons/ai";
// import DashboardRoundedIcon from '@mui/icons-material/DashboardRoundedIcon';
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import Link from "next/link";
const SideBar = () => {
  return (
    <ul className="w-full h-full flex flex-col justify-start items-center !space-y-[18px] pt-[23px] ">
      <li className="!w-[24px] !min-[24px] !max-[24px] !h-[24px]">
        <Link href="/src/app">
          <GridViewRoundedIcon className="w-full h-full opacity-[50%] " />
        </Link>
      </li>
      <li className="!w-[24px] !h-[24px] ">
        <Link href="inbox">
          <AiFillMessage className="w-full h-full opacity-[50%] " />
        </Link>
      </li>
    </ul>
  );
};

export default SideBar;
