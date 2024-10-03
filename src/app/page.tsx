

import ProductPage from "./product/layout";
import RenderLineChart from "@/components/renderLineChart/renderLineChart"
// import Salesdetail from "@/components/salesDetail/Sales


export default function Home() {
  return (
    <div >
      <p className="text-[32px] mt-[30px] mb-[23px]">داشبورد</p>
      <div className="w-full flex justify-between items-center gap-[30px]">
        <div className="total-users w-[300px] h-[170px] bg-white rounded-[5px]">hi</div>
        <div  className="total-order w-[300px] h-[170px] bg-white rounded-[5px]">
         hi
        </div>
        <div className="total-sales w-[300px] h-[170px] bg-white rounded-[5px]">hi</div>
        <div className="total-pending w-[300px] h-[170px] bg-white rounded-[5px]">hi</div>

      </div>
      <div className="sales-detail !w-full h-[344px] bg-white rounded-[5px] mt-[30px] pb-[58px] pt-[7px] pl-[32px] pr-[32px] ">
        {/* < Salesdetail/> */}
       
          <p className="mt-[50px]">جزئیات فروش</p>
        
        <RenderLineChart />
        
      </div>
      <div className="deals-details w-full h-[344px] bg-white rounded-[5px] mt-[30px] pl-[15px] pr-[15px] pt-[20px]">جزئیات معاملات</div>
    </div>
  );
}
