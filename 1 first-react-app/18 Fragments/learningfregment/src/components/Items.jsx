import React from 'react'
import style from "./item.module.css";

const Items = ({ foodItem, bought, handleBuyButtonClicked }) => {

  return (
    <ul className={style.listGroup}  >
      <li className={style.listGroupItem}>{foodItem}<span>
        <button onClick={(event) => handleBuyButtonClicked(event)} className={style.button}>BUY
        </button></span><span>{bought && 'added'}</span></li>
    </ul>
  )
}

export default Items