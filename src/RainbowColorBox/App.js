import ColorBox from './ColorBox';

import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState();

  const inputOnChange = e => {
    setColor(e.currentTarget.value);
  };

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input onChange={inputOnChange} />
      </div>
      <ColorBox />
      <ResetButton />
    </div>
  );
}

export default App;
