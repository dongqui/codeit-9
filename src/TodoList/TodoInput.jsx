import { useState } from "react";

let id = 0;

export default function TodoInput({ onSubmit }) {
  const [toDo, setToDo] = useState("");

  const onChangeInput = (e) => {
    const userInput = e.target.value;
    setToDo(userInput);
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    id = id + 1;
    onSubmit(id, toDo);
  }

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <input type="text" value={toDo} name="toDo" onChange={onChangeInput} />
        <button type="submit">입력</button>
      </form>
    </>
  );
}
