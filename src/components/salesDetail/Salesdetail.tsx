"use client";

import React from "react";
import dynamic from "next/dynamic";
import "chart.js/auto";
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, //y axis
  PointElement,
  Legend,
  Tooltip
} from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend , Tooltip);
const salesdetail= () => {
  const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      // labels: 'GeeksforGeeks Line Chart',
      data: [65, 59, 80, 81, 56],
      
      backgroundColor :'#EEF3FD',
      pointBorderColor:'#4880FF',
      
      borderColor: "#4880FF",
      fill: true,
      tension: 0.1,//curve
    },
  ],
};
const options = {
 plugins:{
 legend : false//title
 },
 scales : {
  y : {

  }
 }
}
  return (    
    <div className="!w-full !max-w-full !min-w-full h-full">
      <h1>hi</h1>
      
     <div className="!w-full !max-w-full !min-w-full h-full ">
       <Line data = {data} options = {options} className="w-full h-full"></Line>
     </div>
   
    </div>
  );
};

export default salesdetail;
