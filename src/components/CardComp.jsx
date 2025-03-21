import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import menyItemData from "../data/MenyItems"
import { useThemeContext } from './context';

const CardComp = (props) => {
    const { order, setOrder } = useThemeContext("");

    function addFood(id){
        setOrder([...order, id])
      }
      

  return (
    <Card key={props.id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} alt="..." />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <span>{props.description}</span>
          <br />
          <br />
          <span>SEK {props.price}</span>
        </Card.Text>
        <Button variant="primary" onClick={() => addFood(props.id)}>
          Add to order
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardComp;
