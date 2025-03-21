import React, { useState } from "react";
import { useThemeContext } from "./context";
import menyItemData from "../data/MenyItems"
import CardComp from "./CardComp"
import './meny.css';
import { Button } from "react-bootstrap";
import Order from "./Order";


const Meny = () => {
  const { background, setBackground } = useThemeContext("");

  const { order, setOrder } = useThemeContext("");

  const mainFood = menyItemData.filter(item => item.category === "Main");
  const mainFoodList = mainFood.map((data) => {
    const cardElement = (
      <CardComp
        key={data.id}
        id={data.id}
        title={data.title}
        category={data.category}
        description={data.description}
        img={data.image}
        price={data.price}
      />
    );
    return cardElement;
  });

  const proteinFood = menyItemData.filter(item => item.category === "Protein");
  const proteinFoodList = proteinFood.map((data) => {
    const cardElement = (
      <CardComp
        key={data.id}
        id={data.id}
        title={data.title}
        category={data.category}
        description={data.description}
        img={data.image}
        price={data.price}
      />
    );
    return cardElement;
  });

  const drinkFood = menyItemData.filter(item => item.category === "Drink");
  const drinkFoodList = drinkFood.map((data) => {
    const cardElement = (
      <CardComp
        key={data.id}
        id={data.id}
        title={data.title}
        category={data.category}
        description={data.description}
        img={data.image}
        price={data.price}
      />
    );
    return cardElement;
  });
  
  const additiveFood = menyItemData.filter(item => item.category === "Additive");
  const additivekFoodList = additiveFood.map((data) => {
    const cardElement = (
      <CardComp
        key={data.id}
        id={data.id}
        title={data.title}
        category={data.category}
        description={data.description}
        img={data.image}
        price={data.price}
      />
    );
    return cardElement;
  });

  
  function checkOrder(){
    console.log(order)
  }

  return (
    <div style={{ background: background }}>
      <div className="container">
        <h1>Meny Add some fancy style</h1>
        <span id="mainCourseSpan" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Main course</span>
        <div
          className="row row-cols-1 row-cols-sm-3 g-3"
          id="cardContainerInner"
        >
         {mainFoodList}
        </div>
        <span id="mainCourseSpan" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Proteins</span>
        <div
          className="row row-cols-1 row-cols-sm-3 g-3"
          id="cardContainerInner"
        >
          {proteinFoodList}
        </div>
        <span id="mainCourseSpan" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Drinks</span>
        <div
          className="row row-cols-1 row-cols-sm-3 g-3"
          id="cardContainerInner"
        >
          {drinkFoodList}
        </div>
        <span id="mainCourseSpan" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Drinks</span>
        <div
          className="row row-cols-1 row-cols-sm-3 g-3"
          id="cardContainerInner"
        >
          {additivekFoodList}
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <span id="orderSpan">Your order</span>
        <Order />
      </div>
    </div>
  );
};

export default Meny;
