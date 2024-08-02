import ColorBox from "./ColorBox";
import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState('')

  const saveColor = event => {
    setColor(event.target.value);
    // console.log(event.target.value);
  };

    return (

    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input onChange={saveColor}/>
      </div>
      <ColorBox ColorBox={color}/>
    </div>
  );
}

export default App;
