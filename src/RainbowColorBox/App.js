import ColorBox from "./ColorBox";
import ResetButton from "./ResetButton";

import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");

  const saveColorValue = (event) => {
    setColor(event.target.value);
  };

  const colorReset = () => {
    setColor("");
  };

  const RAINBOW_COLORS = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "navy",
    "purple",
  ];

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input type="text" onChange={saveColorValue} />
      </div>
      <ColorBox color={color} />
      <ResetButton onClick={colorReset}>리셋 버튼</ResetButton>
    </div>
  );
}

export default App;
