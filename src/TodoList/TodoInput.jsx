import { useState } from "react";

let id = 0;

export default function TodoInput({ onSubmit }) {
  const [todo, setTodo] = useState();

  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  const handleOnClick = () => {
    onSubmit({
      id: id++,
      title: todo,
    });
  };

  return (
    <>
      <input value={todo} onChange={handleInput} />
      <button onClick={handleOnClick}>입력</button>
    </>
  );
}
