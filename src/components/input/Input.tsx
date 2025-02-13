import { CompContext } from "@/app/CompProvider";
import React, { ChangeEventHandler, useContext } from "react";
interface IInput {
  value: string | number;
  inputHandler: ChangeEventHandler<HTMLInputElement>;
  className: string;
  placeholder: string;
  ariaLabel:string;
}
const Input = ({
  value,
  inputHandler,
  className,
  placeholder,
  ariaLabel,
}: IInput) => {
  const Compose = useContext(CompContext);
  return (
    <div>
      <input
        value={value}
        onChange={inputHandler}
        placeholder={placeholder}
        className={className}
        aria-label={ariaLabel}
        
      />
    </div>
  );
};
export default Input;
