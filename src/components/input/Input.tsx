import React from 'react'
interface IInput {
    value: string | number;
    inputHandler: Function;
    className: string;
    placeholder: string;
    type: string;
    onClickHandler?:  Function |undefined
  }
const Input = ({
    value,
    inputHandler,
    className,
    placeholder,
    type,
    onClickHandler
  }: IInput) => {
  return (
    <div>
      <input  
      value={value}
      onChange={(e:any) => inputHandler(e)}
      onClick={() => () => {if(onClickHandler){
        onClickHandler()
      }}}
      type='type'
      placeholder='placeholder'
      className='className'
      ></input>
    </div>
  )
}

export default Input
