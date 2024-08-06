import ColorBox from "./ColorBox";

import "./App.css";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

function App() {

	const [color,setColor] = useState('white');

	const onChange = (e) => {
		setColor(e.target.value);
	};

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input onChange={onChange}/>
      </div>
      <ColorBox color={color}/>
			<ErrorMessage />
    </div>
  );
}

export default App;
