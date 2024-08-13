import { useState } from "react";

let id = 0;

export default function TodoInput({ onSubmit }) {
  const [value, setValue] = useState();

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleOnClick = () => {
    onSubmit({
      id: id++,
      title: value,
    });
  };

  return (
    <>
      <input value={value} onChange={handleInput} />
      <button onClick={handleOnClick}>입력</button>
    </>
  );
}
