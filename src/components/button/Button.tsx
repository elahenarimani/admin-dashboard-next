import React from "react";
interface IButton {
  children?: string | JSX.Element;
  className?: string;
  onClickHandler?: Function | undefined;
}
const Button = ({ children, className, onClickHandler }: IButton) => {
  return (
    <div>
      <button className={className}  onClick={() => onClickHandler()}>
        {children}
      </button>
    </div>
  );
};

export default Button;
