import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import ProductPage from "./product/layout";
import Navigation from "@/components/mainLayOut/navigation/Navigation";
import SideBar from "@/components/mainLayOut/sideBar/SideBar";
const vazir = Vazirmatn({ subsets: ["arabic", "latin"] });
export const metadata: Metadata = {
  title: "Admin-Dashboard",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>
        <div className="mobile block lg:hidden">
          <div className=" w-full h-full  bg-white flex flex-col justify-between items-center  ">
            <div className="navigation w-full  h-[70px]  ">
              <Navigation />
            </div>
            <main className="w-full h-full   bg-[#F5F6FA]  pl-[30px] pr-[30px]">
              {children}
            </main>
          </div>
        </div>
        <div className="desktop hidden lg:block">
          <div className=" w-full h-full grid  grid-cols-[95.6%_4.4%] grid-rows-[70px_1fr] bg-white justify-between items-center  ml-auto gap-x-0">
            <div className="navigation w-full col-start-1 col-end-2  row-start-1 row-end-2 h-[70px] pl-[84px] border-[3px] border-solid border-[#F5F6FA]">
              <Navigation />
            </div>
            <div className="side-bar w-full  h-full col-start-2 col-end-3 row-start-1 row-end-[-1]  !ml-0 mr-auto ">
              <SideBar />
            </div>
            <main className="w-full h-full  col-start-1 col-end-2  row-start-2 row-end-[-1] bg-[#F5F6FA]  pl-[30px] pr-[30px]">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
