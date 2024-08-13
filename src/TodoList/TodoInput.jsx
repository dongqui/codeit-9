import { useState } from 'react';

let id = 0;

export default function TodoInput({ addTodo }) {
  const [title, setTitle] = useState();

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    if (title) {
      addTodo({
        id: id++,
        title,
      });
      setTitle('');
    }
  };

  return (
    <>
      <input value={title} onChange={handleChange} />
      <button onClick={handleClick}>입력</button>
    </>
  );
}
