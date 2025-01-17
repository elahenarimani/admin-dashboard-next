import React from "react";
interface IInput {
  value: string | number;
  inputHandler: Function;
  className: string;
  placeholder: string;
  type?: string;
  onClickHandler?: Function | undefined;
}
const Input = ({
  value,
  inputHandler,
  className,
  placeholder,
  type,
  onClickHandler,
}: IInput) => {
  return (
    <div>
      <input
        value={value}
        onChange={ inputHandler}
        // onClick={() => () => {
        //   if (onClickHandler) {
        //     onClickHandler();
        //     className = className;
        //     placeholder = placeholder;
        //   }
        // }}
        // type={type}
        placeholder={placeholder}
        className={className}
      ></input>
    </div>
  );
};
export default Input;
