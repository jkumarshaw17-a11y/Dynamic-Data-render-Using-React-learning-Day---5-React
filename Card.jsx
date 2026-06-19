import React from "react";
import "./Card.css";

const Card = (props) => {
  console.log(props);

  return (
    <div className="con">
      <div className="Main">
        <img src={props.Picture} alt="" />
        <h1>Username: {props.Username}</h1>
        <h2>City: {props.City}</h2>
        <h2>Profession : {props.Profession}</h2>
        <h2>Age: {props.Age}</h2>
      </div>
    </div>
  );
};

export default Card;
