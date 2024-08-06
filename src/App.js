import ColorBox from "./ColorBox";

import "./App.css";
import { useState } from "react";
import ResetButton from "./ResetButton";

function App() {
  const [color, setColor] = useState("white");

  function colorChange(e) {
    setColor(e.currentTarget.value);
  }

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input onChange={colorChange} />
      </div>
      <ColorBox color={color} />
      <button>
        <ResetButton
          onClick={(value) => {
            setColor(value);
          }}
        />
      </button>
    </div>
  );
}

export default App;
