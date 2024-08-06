import ColorBox from "./ColorBox";
import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState('')

  const saveColor = (event) => {
    setColor(event.target.value);
  };

  const resetColor = () => {
    setColor('')
  }

    return (
    <>
      <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input onChange={saveColor}/>
      </div>
      <ColorBox color={color}/>
      <button onClick={resetColor}>초기화</button>
    </div>
  </>
  );
}

export default App;
