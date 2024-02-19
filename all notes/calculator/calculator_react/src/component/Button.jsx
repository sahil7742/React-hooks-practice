import React from 'react'
import style from './Button.module.css'
const Button = () => {
  const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
  return (
    <>
      <div className={style.buttonsContainer}>
        {buttonNames.map((item, i) => (
          <button className={style.btn}>{item}</button>
        ))}
      </div>
    </>
  )
}

export default Button;