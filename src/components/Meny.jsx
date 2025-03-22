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
    <div style={{ backgroundColor: background,  backgroundImage: "repeating-radial-gradient( circle at 0 0, transparent 0,rgb(113, 113, 148) 20px ), repeating-linear-gradient(rgba(35, 41, 150, 0.33),rgb(137, 139, 172) )"}}>
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
        <span id="titleSpan">Your order</span>
        <Order />
      </div>
    </div>
  );
};

export default Meny;
