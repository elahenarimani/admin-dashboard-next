"use client"
import React from "react";
interface IButton {
  children?: string | JSX.Element;
  className?: string;
  onClickHandler?: Function ;
}
const Button = ({ children, className, onClickHandler }: IButton) => {
  return (
    <div>
      <button className={className}  onClick={() => {if(onClickHandler){
        onClickHandler()
      }}}>
        {children}
      </button>
    </div>
  );
};

export default Button;
