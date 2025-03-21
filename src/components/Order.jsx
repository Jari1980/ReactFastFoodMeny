import React from "react";
import { useThemeContext } from "./context";
import menyItemData from "../data/MenyItems"
import { Button, Table } from "react-bootstrap";

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
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>Food</th>
                <th>Amount</th>
                <th>+</th>
                <th>-</th>
                <th>Price</th>
            </tr>
        </thead>
        
            {menyFiltered.map((item) => (
                <tbody>
                <td>{item.title}</td>
                <td>{order.filter(function(value){return value === item.id}).length}</td>
                <td><Button size="sm" variant="primary" onClick={() => addFood(item.id)}>Add</Button></td>
                <td><Button size="sm" variant="danger" onClick={() => removeFood(item.id)}>Remove</Button></td>
                <td>{item.price * order.filter(function(value){return value === item.id}).length} Sek</td>
                </tbody>
            ))}
            <tbody>
        <tr>
            <td>Sum Total</td>
            <td colSpan={4}>{total()} Sek</td>
        </tr>
        </tbody>
    </Table>
    
    
  </div>
  );
};

export default Order;


/*
<ol>
        {menyFiltered.map((item) => (
            <li key={item.id}>{item.title} X:{order.filter(function(value){return value === item.id}).length} <Button onClick={() => addFood(item.id)}>Add</Button> <Button onClick={() => removeFood(item.id)}>Remove</Button> Price:{item.price * order.filter(function(value){return value === item.id}).length}</li>
        ))}
    </ol>

    <span>Total {total()}</span>
*/