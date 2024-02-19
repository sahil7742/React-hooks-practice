import React from 'react'
import AppName from './componenets/AppName'
import AddTodo from './componenets/AddTodo'
import TodoItem1 from './componenets/TodoItem1'
import TodoItem2 from './componenets/TodoItem2'
import "./App.css";

const App = () => {
  return (

    <center className='todo-container '>
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>

  )
}

export default App

// we have learned that how to import components in react app..