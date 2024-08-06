import ColorBox from './ColorBox';
import ResetButton from './ResetButton';
import ErrorMessage from './ErrorMessage';
import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('');

  const inputOnChange = e => {
    setColor(e.currentTarget.value);
  };

  const handleClickReset = () => setColor('');

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input type="text" value={color} onChange={inputOnChange} />
      </div>
      <ColorBox color={color} />
      <ResetButton onclick={handleClickReset} />
      <ErrorMessage color={color} />
    </div>
  );
}

export default App;
