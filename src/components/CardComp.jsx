import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import menyItemData from "../data/MenyItems"
import { useThemeContext } from './context';
import './cardComp.css';

const CardComp = (props) => {
    const { order, setOrder } = useThemeContext("");

    function addFood(id){
        setOrder([...order, id])
      }
      

  return (
    <Card className="card" key={props.id}>
      <Card.Img variant="top" src={props.img} alt="..." />
      <Card.Body >
        <Card.Title className="cardTextBg">{props.title}</Card.Title>
        <Card.Text className="cardText">
          <span className="cardTextDescription">{props.description}</span>
          <br />
          <br />
          <span>SEK {props.price}</span>
        </Card.Text>
        <Button className="cardButton" variant="primary" onClick={() => addFood(props.id)}>
          Add order
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardComp;
