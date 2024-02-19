import React from 'react'
import TodoItem from './TodoItem'

const Items = ({todoItems}) => {
  return (
    <div>{
      todoItems.map((items,i)=>(
        <TodoItem key={i} todoName={items.name} todoDate={items.dueDate}/>
      ))
    }</div>
  )
}

export default Items;