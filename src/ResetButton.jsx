import './App.css';
import { useState } from 'react';

export const ResetButton = ({ color }) => {
  const [color, setColor] = useState();
  const handleResetClick = () => console.log('Reset button clicked');
  return (
    <div>
      <button className="Reset-button" onClick={handleResetClick}>
        Reset
      </button>
    </div>
  );
};
