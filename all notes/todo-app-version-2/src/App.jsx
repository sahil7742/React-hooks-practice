import React, { useState } from 'react'
import AppName from './componenets/AppName'
import AddTodo from './componenets/AddTodo'
import "./App.css";
import Items from './componenets/Items';

const App = () => {
  const TodoItems = [
    {
      name: "React.js",
      dueDate: "15/03/24"
    },
    {
      name: "Node.js",
      dueDate: "15/06/24"
    },
    {
      name: "Express.js",
      dueDate: "15/08/24"
    }
  ]


  return (

    <center className='todo-container '>
      <AppName />
      <AddTodo />
      <div className="items-container">
        <Items todoItems={TodoItems} />

      </div>
    </center>

  )
}

export default App

// we have learned that how to import components in react app..