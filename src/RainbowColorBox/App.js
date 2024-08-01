import ColorBox from "./ColorBox";
import React, { useState } from "react";
import "./App.css";
import ResetButton from "./ResetButton";

function App() {
  const [color, setColor] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setColor(e.target.value);
    setInputValue(e.target.value);
  };

  const handleReset = () => {
    setColor("");
    setInputValue("");
  };

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input value={inputValue} onChange={handleChange} />
      </div>
      <ColorBox color={color} />
      <ResetButton onClick={handleReset} />
    </div>
  );
}

export default App;
