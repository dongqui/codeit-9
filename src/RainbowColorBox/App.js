import { useState } from "react";

import ColorBox from "./ColorBox";

import "./App.css";

function App() {
  const [color, setColor] = useState("");

  const handleInputChange = (e) => setColor(e.currentTarget.value);

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input onChange={handleInputChange} />
      </div>
      <ColorBox color={color} />
    </div>
  );
}

export default App;
