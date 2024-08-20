import { useState } from "react";

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
      onAdd({ title: inputValue });
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
