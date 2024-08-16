import { useState } from "react";

let id = 0;

export default function TodoInput({ onAddClick, initialTodo }) {
  const [inputValue, setInputValue] = useState("");

  if (initialTodo) setInputValue(initialTodo.text);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputClick = (e) => {
    if (inputValue) {
      onAddClick({ id: id++, text: inputValue });
      setInputValue("");
    }
  };

  return (
    <>
      {initialTodo && (
        <>
          <input onChange={handleInputChange} />
          <button onClick={handleInputClick}>확인</button>
        </>
      )}
      <input onChange={handleInputChange} />
      <button onClick={handleInputClick}>입력</button>
    </>
  );
}
