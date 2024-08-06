import "./App.css";
import { useState } from "react";
import ColorBox from "./ColorBox";
import ResetButton from "./ResetButton";
import ErrorMessage from "./ErrorMessage";

function App() {
  const [color, setColor] = useState("white");

  const colorChange = (e) => {
    setColor(e.currentTarget.value);
  };

  const handleClickReset = () => {
    setColor("");
  };

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input onChange={colorChange} />
      </div>
      <ColorBox color={color} />
      <ErrorMessage color={color} />
      <ResetButton onClick={handleClickReset} />
    </div>
  );
}

export default App;
