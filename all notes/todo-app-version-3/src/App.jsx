import React, { useState } from 'react'
import AppName from './componenets/AppName'
import AddTodo from './componenets/AddTodo'
import "./App.css";
import Items from './componenets/Items';
import WelcomeMessage from './componenets/WelcomeMessage';
import { TodoItemsContext } from './store/TodoItemsStore';


const App = () => {

  const [TodoItems, setTodoItems] = useState([
    {
      name: "React.js",
      dueDate: "2004/03/15"
    },
    {
      name: "Node.js",
      dueDate: "2004/03/15"
    },
    {
      name: "Express.js",
      dueDate: "2004/03/15"
    }
  ]);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currentValue) => [...currentValue,
    {
      name: itemName,
      dueDate: itemDueDate
    }
    ]);
  }
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = TodoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);

  }
    // const defaultTodoItems = [{name: 'complete react js' , dueDate:'29/02/2024'}]

  return (
    <TodoItemsContext.Provider value={{ TodoItems , handleNewItem, 
    handleDeleteItem }}>
      <center className='todo-container '>
        <AppName />
        <AddTodo  />
        <div className="items-container">
          <WelcomeMessage ></WelcomeMessage>
          <Items/>
        </div>
      </center>
    </TodoItemsContext.Provider>

  )
}

export default App

// we have learned that how to import components in react app..