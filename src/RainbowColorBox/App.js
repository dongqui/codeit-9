import ColorBox from "./ColorBox";
import React, { useState } from "react";
import "./App.css";
import ResetButton from "./ResetButton";
import ErrorMessage from "./ErrorMessage";

function App() {
  const [color, setColor] = useState("");

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleReset = () => {
    setColor("");
  };

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input value={color} onChange={handleChange} />
      </div>
      <ColorBox color={color} />
      <ResetButton onClick={handleReset} />
      <ErrorMessage color={color} />
    </div>
  );
}

export default App;
