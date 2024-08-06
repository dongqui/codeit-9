import './App.css';
import { useState } from 'react';
import ColorBox from './ColorBox';
import { ResetButton } from './ResetButton';

function App() {
  const [color, setColor] = useState('white');
  const RAINBOW_COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];
  const error = RAINBOW_COLORS.includes(color) ? '' : '무지개 색이 아닙니다';

  // 상태값 변경 함수
  const onChange = (e) => {
    const color = e.target.value;
    setColor(color);
  };

  const handleResetClick = () => {
    setColor('white');
  };

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input onChange={onChange} />
      </div>
      <ColorBox color={color} />
      <ResetButton onClick={handleResetClick} />
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default App;
