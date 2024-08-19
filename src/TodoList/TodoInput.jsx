import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoInput({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputEnter = (e) => {
    e.preventDefault();
    if (e.key === "Enter") handleInputClick();
  };

  const handleInputClick = () => {
    if (inputValue) {
      onAdd({ id: uuidv4(), title: inputValue });
      setInputValue("");
    }
  };

  return (
    <>
      <input
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputEnter}
      />
      <button onClick={handleInputClick}>입력</button>
    </>
  );
}
