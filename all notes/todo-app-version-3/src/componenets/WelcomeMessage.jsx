import React from 'react'
import { useContext } from 'react';
import { TodoItemsContext } from '../store/TodoItemsStore';

const WelcomeMessage = () => {
  const {TodoItems} = useContext(TodoItemsContext);
  
  return (
    TodoItems.length === 0 && <div className='text-white fs-1 '>kaam kro jldi</div>
  )
}

export default WelcomeMessage