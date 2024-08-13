import { useState } from "react";

let id = 0;

export default function TodoInput({ onSubmit }) {
  const [value, setValue] = useState();

  const handleClick = () => {
    onSubmit({
      id: id++,
      value: value,
    });
  };

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input value={value} onChange={handleInput} />
      <button onClick={handleClick}>입력</button>
    </>
  );
}
