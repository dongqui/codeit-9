import ColorBox from "./ColorBox";

import "./App.css";
import { useState } from "react";
import ResetButton from "./ResetButton";

const RAINBOW_COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "navy",
  "purple",
];

function App() {
  const [color, setColor] = useState("white");

  function colorChange(e) {
    setColor(e.currentTarget.value);
    if (!RAINBOW_COLORS.includes(e.currentTarget.value)) {
      const message = document.querySelector(".message");
      message.innerHTML = "무지개색이 아닙니다.";
    } else {
      const message = document.querySelector(".message");
      message.innerHTML = "";
    }
  }

  function handleClickReset() {
    setColor("");
  }

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input onChange={colorChange} />
      </div>
      <ColorBox color={color} />
      <p className="message"></p>
      <ResetButton onClick={handleClickReset} />
    </div>
  );
}

export default App;
