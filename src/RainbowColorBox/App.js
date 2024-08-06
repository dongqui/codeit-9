import { useState } from "react";
import ColorBox from "./ColorBox";
import ResetButton from "./ResetButton";
import PrintErrorMessage from "./PrintErrorMessage";

import "./App.css";

function App() {
  const [color, setColor] = useState('white');

  let changeColor = (e) => setColor(e.currentTarget.value);

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
      <ResetButton setColor={setColor} />
      <PrintErrorMessage currentColor={color} />
    </div>
  );
}

export default App;
