import ColorBox from "./ColorBox";

import "./App.css";
import { useState } from "react";

function App() {
  let [color, setColor] = useState("")

  let handle = (e) => {
    setColor(e.target.value)
  }

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input />
      </div>
      <ColorBox color={color}/>
      <button onClick={()=> {setColor = ""}}>초기화</button>
    </div>
  );
}

export default App;
