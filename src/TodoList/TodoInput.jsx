import { useState } from "react";

let id = 0;

export default function TodoInput({ onSubmit }) {
  const [title, setTitle] = useState();

  const handleClick = () => {
    onSubmit({
      id: id++,
      title: title,
    });
  };

  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <input title={title} onChange={handleInput} />
      <button onClick={handleClick}>입력</button>
    </>
  );
}
