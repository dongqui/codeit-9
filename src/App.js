import ColorBox from './ColorBox';
import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('');

  // 상태값 변경 함수
  const onChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input onChange={onChange} />
      </div>
      <ColorBox color={color} />
    </div>
  );
}

export default App;
