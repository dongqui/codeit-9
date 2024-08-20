import { useState } from "react";

export default function TodoInput({ onAdd, disabled }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputEnter = (e) => {
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
        autoFocus
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputEnter}
        disabled={disabled}
      />
      <button onClick={handleInputClick} disabled={disabled}>
        입력
      </button>
    </>
  );
}
