import { useState } from "react";

let id = 0;

export default function TodoInput({ onClick }) {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    onClick(value);
  };

  return (
    <>
      <input onChange={handleInput} />
      <button onClick={handleSubmit}>입력</button>
    </>
  );
}
