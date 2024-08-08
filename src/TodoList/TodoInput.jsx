// 임시코드
// 리액트 배열 사용 key
// id += 1;
import { useState } from 'react';

let id = 0;

export default function TodoInput({ onAdd }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputClick = () => {
    if (inputValue) {
      onAdd({ id: ++id, text: inputValue });
      setInputValue('');
    }
  };

  return (
    <>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleInputClick}>입력</button>
    </>
  );
}
