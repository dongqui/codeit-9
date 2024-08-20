import { useState } from "react";

export default function TodoInput({ onSubmit }) {
  const [toDo, setToDo] = useState("");

  const onChangeInput = (e) => {
    const userInput = e.target.value;
    setToDo(userInput);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    onSubmit(toDo);
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <input type="text" value={toDo} name="toDo" onChange={onChangeInput} />
        <button type="submit">입력</button>
      </form>
    </>
  );
}
