import { useState } from "react";

let id = 0;

export default function TodoInput({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnClick = () => {
    addTodo({ id: id++, inputValue: inputValue });
    setInputValue("");
  };

  return (
    <>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleOnClick}>입력</button>
    </>
  );
}
