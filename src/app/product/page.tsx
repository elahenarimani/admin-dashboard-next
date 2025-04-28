import React from "react";
export default async function ProductPage (){
  const response = await fetch("https://67e5437718194932a5854cab.mockapi.io/product")
  const result = await response.json()
  return (
    <div className="w-full h-full grid grid-cols-3">
      {result.map((product:any)=> (
        <div className="w-full h-full " key={product.id}> <div>{product.name}</div></div>
      ))}
      
      <p>yes</p>
    </div>
  );
};


