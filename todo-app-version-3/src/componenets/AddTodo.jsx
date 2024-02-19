
import { useState, useRef, useContext } from 'react'
import { MdAddBox } from "react-icons/md";
import { TodoItemsContext } from '../store/TodoItemsStore';

const AddTodo = () => {
  const {handleNewItem} = useContext(TodoItemsContext);

  // const [todoName, setTodoName] = useState("");
  // const [todoDate, setTodoDate] = useState("");
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;

  // }
  // const handleDateChange = (event) => {
  //   setTodoDate(event.target.value);
  //   console.log(`number of updates are ${noOfUpdates.current}`);
  // }
  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value= "";
    todoDateElement.current.value= "";
    handleNewItem(todoName, todoDate);
    

    // setTodoDate("");
    // setTodoName("");
  }
  return (
    <div className="container text-center">
      <form action='' className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-4">
          <input type='text' ref={todoNameElement} placeholder='Enter TODO' /*value={todoName} onChange={handleNameChange}*/ />
        </div>
        <div className="col-4">
          <input type="date" ref={todoDateElement} /* value={todoDate} onChange={handleDateChange}*/ />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button" ><MdAddBox /></button>
        </div>
      </form>
    </div>
  )
}

export default AddTodo