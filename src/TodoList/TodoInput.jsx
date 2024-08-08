import { useState } from "react";

export default function TodoInput({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>입력</button>
    </>
  );
}
