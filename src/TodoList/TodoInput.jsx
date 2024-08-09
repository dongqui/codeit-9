import { useState } from 'react';

let id = 0;

export default function TodoInput() {
  const [titile, setTitle] = useState('');
  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    setTitle(id++);
  };

  return (
    <>
      <input value={titile} onChange={handleChange} />
      <button onClick={handleClick}>입력</button>
    </>
  );
}
