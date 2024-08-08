import { useState } from "react";

let id = 0;

export default function TodoInput({ onSubmit }) {
  const [value, setValue] = useState();
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnClick = () => {
    onSubmit({ id: id, title: value });
  };

  return (
    <>
      <input value={value} onChange={handleChange} />
      <button onClick={handleOnClick}>입력</button>
    </>
  );
}
