import React from "react";
import { useThemeContext } from "./context";
import menyItemData from "../data/MenyItems"

const Order = (props) => {
  const { order, setOrder } = useThemeContext("");

  const orderDistinct = [...new Set(order)]

  const menyFiltered = [];

  for(const item of orderDistinct){
    menyFiltered.push(menyItemData[item - 1])
  }

  console.log(menyFiltered)
  //const Broccoli = menyItemData.filter((item) => item.id === 1);
  

  return (
  <div>
    <ol>
        {menyFiltered.map((item) => (
            <li key={item.id}>Item: {item.title} Amount:{order.filter(function(value){return value === item.id}).length} Price:{item.price * order.filter(function(value){return value === item.id}).length}</li>
        ))}
    </ol>
  </div>
  );
};

export default Order;
