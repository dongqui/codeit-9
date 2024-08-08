import { useState } from "react";

let id = 0;

export default function TodoInput({ onSubmit }) {
  const [title, setTitle] = useState();
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleOnClick = () => {
    onSubmit({ id: id++, title: title });
  };

  return (
    <>
      <input value={title} onChange={handleChange} />
      <button onClick={handleOnClick}>입력</button>
    </>
  );
}
