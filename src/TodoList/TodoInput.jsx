import { useState } from "react";

let id = 0;

export default function TodoInput() {
  const [value, setValue] = useState();

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input value={value} onChange={handleInput} />
      <button>입력</button>
    </>
  );
}
