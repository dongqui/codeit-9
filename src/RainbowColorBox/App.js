import ColorBox from "./ColorBox";
import ResetButton from "./ResetButton";
import "./App.css";
import { useState } from "react";
import NotRainbowColor from "./NotRainbowColor";

function App() {
  const [color, setColor] = useState("");

  const saveColorValue = (event) => {
    setColor(event.target.value);
  };

  const colorReset = () => {
    setColor("");
  };

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input type="text" onChange={saveColorValue} value={color} />
      </div>
      <ColorBox color={color} />
      <ResetButton onClick={colorReset} />
      <NotRainbowColor color={color} />
    </div>
  );
}

export default App;
