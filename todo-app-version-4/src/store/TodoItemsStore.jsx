import { useReducer } from "react";
import { createContext } from "react";

//it is a method in raect
 export const TodoItemsContext = createContext(
  { 
  TodoItems :[],
  handleNewItem:()=>{}, 
  handleDeleteItem :()=>{}
});
const TodoItemsReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === 'NEW_ITEM') {
    newTodoItems = [
      ...currentTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === 'DELETE_ITEM') {
    newTodoItems = currentTodoItems.filter(item => item.name !== action.payload.itemName);
  }
  return newTodoItems;
};
const TodoItemsContextProvider =({children})=>{
  const [TodoItems, dispatchTodoItems] = useReducer(TodoItemsReducer, [
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
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate
      }
    };
    dispatchTodoItems(newItemAction);
  }
  const handleDeleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName
      }
    };
    dispatchTodoItems(deleteItemAction);
  }
  return(
    <TodoItemsContext.Provider value={{
      TodoItems, handleNewItem,
      handleDeleteItem
    }}>
      {children}
    </TodoItemsContext.Provider>
  )

}
export default TodoItemsContextProvider;


//  [
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
// ]