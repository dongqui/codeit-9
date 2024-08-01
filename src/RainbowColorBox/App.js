import ColorBox from "./ColorBox";
import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");

  const handleOnChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input type="text" value={color} onChange={handleOnChange} />
      </div>
      <ColorBox color={color} />
    </div>
  );
}

export default App;
