import React from 'react'
import style from './Container.module.css';
const Container = ({children}) => {
  return (
    <div className={style.foodCard}>{children}</div>
  )
}

export default Container