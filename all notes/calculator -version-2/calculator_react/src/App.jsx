import React from 'react'
import style from './App.module.css'
import Display from './component/Display'
import Button from './component/Button'
import { useState } from 'react'

const App = () => {

  const [calValue, setCalValue] = useState(" ");
  const onButtonClick = (event) => {
    // console.log(event);
    const buttonText = event.target.innerHTML;
    if (buttonText === 'C') {
      setCalValue("")
    } else if (buttonText === '=') {
      const result = eval(calValue);
      setCalValue(result);
    } else {
      const newDisplayValue = calValue + buttonText;
      setCalValue(newDisplayValue);
    }

  }

  return (
    <div className={style.calculator}>
      <Display displayValue={calValue} />
      <Button onButtonClick={onButtonClick} />
    </div>

  )
}

export default App