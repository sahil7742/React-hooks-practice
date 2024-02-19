import React from "react";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/TodoItemsStore";

const TodoItem = ({ todoName, todoDate}) => {
  const {handleDeleteItem} = useContext(TodoItemsContext);


  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" onClick={()=>handleDeleteItem(todoName)} className="btn btn-danger kg-button">
          <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
