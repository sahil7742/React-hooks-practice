import React, { useState } from 'react'
import Items from './Items'

const FoodItems = ({ data }) => {
  let [addedItems, setAddedItems] = useState([]);

  let onBuyButton = (item,event) => {
    let newItems = [...addedItems, item];
    setAddedItems(newItems);

  }


  return (
    <div>{data.map((item, index) => (
      <Items key={index} foodItem={item} bought={addedItems.includes(item)}
      handleBuyButtonClicked={(event)=> onBuyButton(item,event)}
        // handleBuyButtonClicked={() => alert(`${item} added to cart`)}
        ></Items>
    ))
    }</div>
  )
}

export default FoodItems