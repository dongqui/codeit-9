import ColorBox from "./ColorBox";
import ResetButton from "./ResetButton";
import ErrorMessage from "./ErrorMessage";

import "./App.css";

import { useState } from "react";

function App() {
  const [color, setColor] = useState("");

  const inputColor = (e) => {
    setColor(e.currentTarget.value);
  };

  const clearColor = () => {
    setColor("");
  };

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input onChange={inputColor} />
      </div>
      <ColorBox color={color} />
      <ResetButton onClick={clearColor} />
      <ErrorMessage color={color} />
    </div>
  );
}

export default App;
