import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';

const App = () => {

  // //conditional rendeing types
  // if (foodItem.length === 0) {
  //   return (
  //     <center>
  //       <h1>HEALTHY FOOD</h1><h3>Please fill array to show diet</h3>
  //     </center>
  //   )
  // }
  // const noFood = foodItem.length === 0 ? <h3>GO to the diet planner</h3> : null;

  const [ foodItem, setFoodItem] = useState([]);
  
  
  //  let textStateArr = useState("Food Item Entered");
  //  let textToShow = textStateArr[0];
  //  let setTextState = textStateArr[1];

  const onKeyDown = (event) => {
    if(event.key === 'Enter'){
     let newFoodItem = event.target.value;
     event.target.value =" ";
     let newItems = [...foodItem , newFoodItem];
     setFoodItem(newItems);
    }
    

  }

  return (
    <div className='cards'>
      <Container>
        <h1 className='food-heading'>HEALTHY FOOD</h1>
        {/* {noFood} */}
        <ErrorMessage data={foodItem} />
        <FoodInput data={foodItem} handleKeyDown={onKeyDown} />
        {/* <span className='fs-1 text-white'>{textToShow}</span> */}
        <FoodItems data={foodItem} />
      </Container>
    </div>
  )
}

export default App