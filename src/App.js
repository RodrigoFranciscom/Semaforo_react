import React, { useState } from 'react';
import './App.css';

function App() {

  const [color, setColor] = useState ("red")

  const changeColor = (color) => { setColor(color)}


  return (
    <div className="container">
      <div className="palo"></div>
      <div className="semaforoBody">
        <div
          className={`red ${color === "red" ? "brillo" : ""}`}
          onClick={() => changeColor("red")}
        ></div>
        <div
          className={`yellow ${color === "yellow" ? "brillo" : ""}`}
          onClick={() => changeColor("yellow")}
        ></div>
        <div
          className={`green ${color === "green" ? "brillo" : ""}`}
          onClick={() => changeColor("green")}
        ></div>
      </div>
    </div>
  );
  
  }



export default App;
