import React from "react";
interface IInput {
  value: string | number;
  inputHandler: Function;
  className: string;
  placeholder: string;
  type: string|number;
  ariaLabel:string;
}
const Input = ({
  value,
  inputHandler,
  className,
  placeholder,
  type,
  ariaLabel,
}: IInput) => {
  return (
    <div>
      <input
        value={value}
        onChange={ (e:React.ChangeEvent<HTMLInputElement>) => inputHandler(e)}
        placeholder={placeholder}
        className={className}
        aria-label={ariaLabel}
        type={type}
      ></input>
    </div>
  );
};
export default Input;
