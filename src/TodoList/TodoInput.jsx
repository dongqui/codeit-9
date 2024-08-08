import { useState } from "react";

let id = 0;

export default function TodoInput({onSubmit}) {
  const [toDo, setToDo] = useState("");

  const onChangeInput = (e) => {
    const userInput = e.target.value;
    
    setToDo(userInput);
  }


  return (
    <>
      <input type="text" value={toDo} name="toDo" onChange={onChangeInput} />
      <button onSubmit={onSubmit}>입력</button>
    </>
  );
}
