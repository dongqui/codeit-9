import ColorBox from "./ColorBox";
import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState('white');

  const changeColor = (e) => {
    setColor(e.target.value);
  }

  function resetColor() {
    setColor('white');
  }

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input onChange={changeColor} />
      </div>
      <ColorBox color={color} />
      <button onClick={resetColor}>초기화</button>
    </div>
  );
}

export default App;
