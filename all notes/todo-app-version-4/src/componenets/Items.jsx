import React from 'react'
import TodoItem from './TodoItem'
import { TodoItemsContext } from '../store/TodoItemsStore'
import { useContext } from 'react'

const Items = () => {
  
  const {TodoItems} = useContext(TodoItemsContext);
  
  return (
    <div>{
      TodoItems.map((items,i)=>(
        <TodoItem key={i} todoName={items.name} todoDate={items.dueDate}  />
      ))
    }</div>
  )
}

export default Items;