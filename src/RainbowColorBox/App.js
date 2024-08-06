import './App.css';
import { useState } from 'react';
import ColorBox from './ColorBox';
import { ResetButton } from './ResetButton';

function App() {
  const [color, setColor] = useState('white');
  const [error, setError] = useState('');

  const RAINBOW_COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];

  // 상태값 변경 함수
  const onChange = (e) => {
    const newColor = e.target.value;
    if (RAINBOW_COLORS.includes(newColor)) {
      setColor(newColor);
      setError('');
    } else {
      setError('Error: 색상이 유효하지 않습니다.');
    }
  };

  const handleResetClick = () => {
    setColor('white');
    setError('');
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
