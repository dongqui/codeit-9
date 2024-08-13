import { useState } from "react";

let id = 0;

export default function TodoInput({ onAddClick }) {
  const [inputValue, setInputValue] = useState("");

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
      <input onChange={handleInputChange} />
      <button onClick={handleInputClick}>입력</button>
    </>
  );
}
