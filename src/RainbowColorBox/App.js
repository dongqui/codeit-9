import ColorBox from "./ColorBox";

import "./App.css";
import { useState } from "react";
import ResetButton from "./ResetButton";

function App() {
	const [color,setColor] = useState('white');
	const [reset, setReset] = useState('');

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
			<button onClick={reset}>초기화</button>
    </div>
  );
}

export default App;
