import React from "react";
import "../App.css";

// JavaScript ES6 Array Destructuring
const [planet, continent, country] = ["Earth", "South America", "Peru"];
const card = () => {
  const clickHandler = () => console.log("Hello world.");

  return (
    //Props added to individual cards
    <div className="box">
      <div className="card-wrap">
        <Card1 name="michael" />
        <Card2 level="beginner" />
        <Card3 location={planet} continent={continent} country={country} />
        <Card4 hobby="music" />
      </div>
      <button type="button" className="btn" onClick={clickHandler}>
        this button logs a message on the console
      </button>
    </div>
  );
};

const Card1 = (props) => {
  return (
    <div className="card">
      <h2>Intro to React</h2>
      <small>React Functions</small>
      <small>author: {props.name}</small>
    </div>
  );
};

const Card2 = (props) => {
  return (
    <div className="card">
      <h2>Hello World</h2>
      <small>Function Based Components</small>
      <small>level: {props.level}</small>
    </div>
  );
};

const Card3 = (props) => {
  return (
    <div className="card">
      <h2>Hello World</h2>
      <small>Class Based Components</small>
      <small>location: {props.continent}</small>
    </div>
  );
};

const Card4 = (props) => {
  return (
    <div className="card">
      <h2>Hello World</h2>
      <small>React Hooks</small>
      <small>hobby: {props.hobby}</small>
    </div>
  );
};

export default card;
