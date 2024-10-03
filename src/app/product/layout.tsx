// "use client"
import { Children } from "react";

//   }>){
interface Iprops{
  children:React.ReactNode
}
function ProductPageLayout({children}:Iprops){
return(
  <div className="w-full h-full">
    {children}
 layout Page
      </div>
)
}
export default ProductPageLayout;