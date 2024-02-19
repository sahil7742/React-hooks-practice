import React from 'react'

const TodoItem2 = () => {
  let todoName = 'go to College';
  let todoDate = new Date().toLocaleDateString();
  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-4">
          {todoName}
        </div>
        <div className="col-4">
          {todoDate}
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem2