import React from 'react'
import style from  './App.module.css'
import Display from './component/Display'
import Button from './component/Button'

const App = () => {
  return (
      <div className={style.calculator}>
     <Display/>
     <Button/>
      </div>
    
  )
}

export default App