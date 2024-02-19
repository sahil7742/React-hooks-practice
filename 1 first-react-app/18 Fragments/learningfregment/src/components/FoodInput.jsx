import React from 'react'
import style from "./FoodInput.module.css";

const FoodInput = ({handleKeyDown}) => {
  
  return (
    <div><input type='search' onKeyDown={handleKeyDown} placeholder='search' className={style.Search}/>
    </div>

  )
}

export default FoodInput