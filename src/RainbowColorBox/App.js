import ColorBox from "./ColorBox";

import "./App.css";
import { useState } from "react";

function App() {
  let [color, setColor] = useState('')
  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input style={ {backgroundColor : { setColor }}}/>
      </div>
      <ColorBox />
    </div>
  );
}

export default App;
