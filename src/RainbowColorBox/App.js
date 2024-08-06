import ColorBox from './ColorBox';
import './App.css';
import { useState } from 'react';
import { ResetButton } from './ResetButton';

function App() {
  const [color, setColor] = useState('white');

  const RAINBOW_COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];

  // 상태값 변경 함수
  const onChange = (e) => {
    setColor(e.target.value);
  };
  const handleResetClick = () => setColor('white');

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input onChange={onChange} />
      </div>
      <ColorBox color={color} />
      <ResetButton onClick={handleResetClick} />
      {RAINBOW_COLORS.map((color) => (
        <div>{color}</div>
      ))}
    </div>
  );
}

export default App;
