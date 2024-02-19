
import AppName from './componenets/AppName'
import AddTodo from './componenets/AddTodo'
import "./App.css";
import Items from './componenets/Items';
import WelcomeMessage from './componenets/WelcomeMessage';
import TodoItemsContextProvider, { TodoItemsContext } from './store/TodoItemsStore';
///////////////////////////////////////////////////////here we useRedeucer////////////////////////////////////////////////

const App = () => {

  // const [TodoItems, setTodoItems] = useState([
  //   {
  //     name: "React.js",
  //     dueDate: "2004/03/15"
  //   },
  //   {
  //     name: "Node.js",
  //     dueDate: "2004/03/15"
  //   },
  //   {
  //     name: "Express.js",
  //     dueDate: "2004/03/15"
  //   }
  // ]);

    // setTodoItems((currentValue) => [...currentValue,
    // {
    //   name: itemName,
    //   dueDate: itemDueDate
    // }
    // ]);

    // const newTodoItems = TodoItems.filter(item => item.name !== todoItemName);
    // setTodoItems(newTodoItems);

  
  // const defaultTodoItems = [{name: 'complete react js' , dueDate:'29/02/2024'}]

  return (
    <TodoItemsContextProvider>
      <center className='todo-container '>
        <AppName />
        <AddTodo />
        <div className="items-container">
          <WelcomeMessage ></WelcomeMessage>
          <Items />
        </div>
      </center>
    </TodoItemsContextProvider>

  )
}

export default App

// we have learned that how to import components in react app..