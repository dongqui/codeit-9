import { useState } from 'react';

export default function TodoInput({ onSubmit }) {
  const [title, setTitle] = useState();

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (title) {
      onSubmit(title);
      setTitle('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={handleChange} />
        <button type="submit">입력</button>
      </form>
    </>
  );
}
