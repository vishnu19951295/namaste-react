import React from "react";
import ReactDOM from "react-dom";

// React.CreateElement = >Object = > Html Element(render)
const heading = React.createElement("h1",{id:"firstElement"},"Hello World from React");

// JSX


const elem = <span>This is span element!!</span>

const Title = () => (
  <h1 id="heading" className="head">
    {elem}
    This is from Title JSX!

  </h1>
  
);
const HeadingComponent =  () => 
   (
    <div id="container">
      <Title></Title>
      {Title()}
      <h1>This is Functional React Component!!</h1>
    </div>
  );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Title());