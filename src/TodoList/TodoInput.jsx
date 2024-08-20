import { useState } from 'react';

export default function TodoInput({ onAdd }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleInputSubmit = () => {
    if (inputValue) {
      onAdd({ title: inputValue });
      setInputValue('');
    }
  };

  return (
    <>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleInputSubmit}>입력</button>
    </>
  );
}
