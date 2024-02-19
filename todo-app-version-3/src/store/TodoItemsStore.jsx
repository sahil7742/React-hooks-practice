import { createContext } from "react";

//it is a method in raect
 export const TodoItemsContext = createContext({ TodoItems :[], handleNewItem:()=>{}, 
  handleDeleteItem :()=>{}});


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