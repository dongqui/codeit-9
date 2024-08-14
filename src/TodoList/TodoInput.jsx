import { useState } from "react";

export default function TodoInput({ onAddClick }) {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => setValue(e.target.value);
  const handleAddClick = () => {
    setValue("");
    onAddClick(value);
  };

  return (
    <>
      <input onChange={handleInputChange} value={value} />
      <button onClick={handleAddClick}>입력</button>
    </>
  );
}
