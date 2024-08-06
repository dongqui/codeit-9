import ColorBox from "./ColorBox";

import "./App.css";
import { useState } from "react";
import ResetButton from "./ResetButton";

function App() {
  const [color, setColor] = useState();

  function handleColor(event) {
    setColor(event.currentTarget.value);
  }

  return (
    <div className='App'>
      <h1>무지개색 상자</h1>
      <div>
        <input onChange={handleColor} />
      </div>
      <ColorBox color={color} />
      <ResetButton onClick={setColor} />
    </div>
  );
}

export default App;
