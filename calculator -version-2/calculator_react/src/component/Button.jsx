import React from 'react'
import style from './Button.module.css'
const Button = ({onButtonClick}) => {
  const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
  return (
    <>
      <div className={style.buttonsContainer}>
        {buttonNames.map((item) => (
          <button className={style.btn} onClick={onButtonClick} >{item}</button>
        ))}
      </div>
    </>
  )
}

export default Button;