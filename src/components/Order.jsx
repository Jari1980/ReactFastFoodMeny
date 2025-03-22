import React from "react";
import { useThemeContext } from "./context";
import menyItemData from "../data/MenyItems";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const Order = (props) => {
  const { order, setOrder } = useThemeContext("");

  const orderDistinct = [...new Set(order)];

  const menyFiltered = [];

  for (const item of orderDistinct) {
    menyFiltered.push(menyItemData[item - 1]);
  }

  function addFood(id) {
    setOrder([...order, id]);
  }

  function removeFood(id) {
    const index = order.indexOf(id);
    setOrder([...order.slice(0, index), ...order.slice(index + 1)]);
  }

  function total() {
    let sum = 0;
    order.forEach((element) => {
      sum = sum + menyItemData[element - 1].price;
    });
    return sum;
  }

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Food</th>
            <th>Amount</th>
            <th></th>
            <th>Price</th>
          </tr>
        </thead>

        {menyFiltered.map((item) => (
          <tbody key={item.id}>
            <tr>
              <td>{item.title}</td>
              <td>
                {
                  order.filter(function (value) {
                    return value === item.id;
                  }).length
                }
              </td>
              <td>
                <Button
                  size="sm"
                  variant="success"
                  onClick={() => addFood(item.id)}
                >
                  +
                </Button>{" "}
                /{" "}
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => removeFood(item.id)}
                >
                  -
                </Button>
              </td>
              <td>
                {(item.price *
                  order.filter(function (value) {
                    return value === item.id;
                  }).length).toFixed(2)} Sek
              </td>
            </tr>
          </tbody>
        ))}
        <tbody>
          <tr>
            <td>
              <b>Sum Total</b>
            </td>
            <td colSpan={3} style={{ textAlign: "right", paddingRight: 50 }}>
              <b>{total().toFixed(2)} Sek</b>
            </td>
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
