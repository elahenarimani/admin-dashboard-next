import React from 'react';
import SwiperHeader from '../../components/product/swiperHeader/SwiperHeader'
interface Iprops {
  children: React.ReactNode;
}
const ProductLayout = ({ children }: Iprops) => {
  return (
    <div className='product w-full min-h-screen  bg-[#F5F6FA] pl-[9px] pr-[9px]'>
        <p className="hidden sm:block text-[32px] mt-[30px] mb-[23px]">محصولات</p>
        <div className="hidden sm:block min-w-[1296px] bg-[#4880FF] h-[356px] rounded-[9px]">
        <SwiperHeader/>
      </div>
      <main className="">{children}</main>
    </div>
  )
}

export default ProductLayout
