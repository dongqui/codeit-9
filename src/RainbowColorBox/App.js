import { useState } from "react";

import ColorBox from "./ColorBox";
import ResetButton from "./ResetButton";

import "./App.css";

function App() {
  const [color, setColor] = useState("");

  const handleChangeInput = (e) => setColor(e.currentTarget.value);
  const handleClickReset = () => setColor("");

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input onChange={handleChangeInput} />
      </div>
      <ColorBox color={color} />
      <ResetButton onClick={handleClickReset} />
    </div>
  );
}

export default App;
