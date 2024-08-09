import { useRef } from "react";

let id = 0;

export default function TodoInput({ onSubmit }) {
  const inputRef = useRef(null);

  const handleClick = () => {
    const newTodo = {
      id: id++,
      title: inputRef.current.value,
    };

    if (newTodo.title.trim()) {
      onSubmit(newTodo);
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>입력</button>
    </>
  );
}
