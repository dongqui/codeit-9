import ColorBox from "./ColorBox";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input onChange={handleChange} />
      </div>
      <ColorBox color={color} />
    </div>
  );
}

export default App;
