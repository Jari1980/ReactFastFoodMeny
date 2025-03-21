import React from "react";
import { useThemeContext } from "./context";
import menyItemData from "../data/MenyItems"
import { Button } from "react-bootstrap";

const Order = (props) => {
  const { order, setOrder } = useThemeContext("");

  const orderDistinct = [...new Set(order)]

  const menyFiltered = [];

  for(const item of orderDistinct){
    menyFiltered.push(menyItemData[item - 1])
  }

  function addFood(id){
    setOrder([...order, id])
  }

  function removeFood(id){
    const index = order.indexOf(id);
    setOrder([
        ...order.slice(0, index),
        ...order.slice(index + 1)
    ])
  }

  function total(){
    let sum = 0;
    order.forEach(element => {
        sum = sum + menyItemData[element - 1].price;
    });
    return sum;
  }
  

  return (
  <div>
    <ol>
        {menyFiltered.map((item) => (
            <li key={item.id}>{item.title} X:{order.filter(function(value){return value === item.id}).length} <Button onClick={() => addFood(item.id)}>Add</Button> <Button onClick={() => removeFood(item.id)}>Remove</Button> Price:{item.price * order.filter(function(value){return value === item.id}).length}</li>
        ))}
    </ol>
    <span>Total {total()}</span>
  </div>
  );
};

export default Order;
