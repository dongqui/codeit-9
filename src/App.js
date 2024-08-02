import ColorBox from "./ColorBox";

import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  function colorChange() {
    const inputValue = document.querySelector(".colorInput");
    setColor(inputValue);
  }

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input className="colorInput" onChange={colorChange} />
      </div>
      <ColorBox color={color} />
    </div>
  );
}

export default App;
