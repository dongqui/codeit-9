import ColorBox from "./ColorBox";

import "./App.css";
import { useState } from "react";
import ResetButton from "./ResetButton";
import Rainbow from "./Rainbow";

function App() {
  const [color, setColor] = useState("");
  
  const onChnageValue = (e) => {
    setColor(e.target.value);
  };

  const onReset = () => {
    setColor("");
  }

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input onChange={onChnageValue} value={color} />
      </div>
      <ColorBox color={color} />
      <ResetButton reset={onReset} />
      <Rainbow color={color} />
    </div>
  );
}

export default App;
