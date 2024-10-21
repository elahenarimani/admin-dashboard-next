import ProductPage from "./product/layout";
import RenderLineChart from "@/components/mainLayOut/renderLineChart/renderLineChart";
// import Salesdetail from "@/components/salesDetail/Sales

export default function Home() {
  return (
    <div  className="w-full  ">
      <p className="w-full text-[32px] mt-[30px] mb-[23px]">داشبورد</p>
      <div>
      <div className="w-full grid sm:grid-cols-1 gap-y-8 md:grid-cols-2 2xl:flex 2xl:justify-between items-center justify-items-center pl-0 pr-0 pl-[32px] pr-[32px]">
        <div className="total-users w-[300px] h-[170px] bg-white rounded-[5px]">
          hi
        </div>
        <div className="total-order w-[300px] h-[170px] bg-white rounded-[5px]">
          hi
        </div>
        <div className="total-sales w-[300px] h-[170px] bg-white rounded-[5px]">
          hi
        </div>
        <div className="total-pending w-[300px] h-[170px] bg-white rounded-[5px]">
          hi
        </div>
      </div>
      </div>
      {/* <div className="w-full flex justify-between items-center gap-[30px]">
        <div className="total-users w-[300px] h-[170px] bg-white rounded-[5px]">
          hi
        </div>
        <div className="total-order w-[300px] h-[170px] bg-white rounded-[5px]">
          hi
        </div>
        <div className="total-sales w-[300px] h-[170px] bg-white rounded-[5px]">
          hi
        </div>
        <div className="total-pending w-[300px] h-[170px] bg-white rounded-[5px]">
          hi
        </div>
      </div> */}
      <div className="sales-detail !w-full h-[344px] bg-white rounded-[5px] mt-[30px] pb-[58px] pt-[7px] pl-[32px] pr-[32px] ">
        {/* < Salesdetail/> */}
        <p className="mt-[50px]">جزئیات فروش</p>
        <RenderLineChart />
      </div>
      <div className="deals-details w-full h-[344px] bg-white rounded-[5px] mt-[30px] pl-[15px] pr-[15px] pt-[20px]">
        جزئیات معاملات
      </div>
    </div>
  );
}
