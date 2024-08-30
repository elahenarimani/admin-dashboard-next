import React from 'react'
// import { RxDashboard } from "react-icons/rx";
// import "./sideBar.css"
import { AiFillMessage } from "react-icons/ai";
// import DashboardRoundedIcon from '@mui/icons-material/DashboardRoundedIcon';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
const SideBar = () => {
  return (
    <div className='w-full h-full flex flex-col justify-start items-center !space-y-[18px] pt-[23px] '>
      <div className='!w-[24px] !min-[24px] !max-[24px] !h-[24px]'>
        <GridViewRoundedIcon className='w-full h-full opacity-[50%] '/>
       
           {/* <RxDashboard className='dashboard !w-full !h-full opacity-[50%]'/> */}
        
      </div>
      <div className='!w-[24px] !h-[24px] '>
      {/* <RxDashboard className='!w-full !h-full opacity-[50%]'/> */}
      {/* <svg data-testid="DashboardRoundedIcon"></svg> */}
           <AiFillMessage className='w-full h-full opacity-[50%] '/>
        
      </div>
    </div>
  )
}

export default SideBar
