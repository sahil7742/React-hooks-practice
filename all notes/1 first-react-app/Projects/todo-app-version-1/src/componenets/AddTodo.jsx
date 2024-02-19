import React from 'react'

const AddTodo = () => {
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-4">
          <input type='text' placeholder='Enter TODO' />
        </div>
        <div className="col-4">
          <input type='date' />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button">ADD</button>
        </div>
      </div>
    </div>
  )
}

export default AddTodo