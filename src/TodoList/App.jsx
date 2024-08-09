import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState("");
  const [id, setId] = useState("");

  const handleInput = (inputVal, inputId) => {
    setList(inputVal);
    setId(inputId);
  };

  return (
    <div>
      <TodoInput onClick={handleInput} />
      <ul>
        <TodoItem list={list} />
      </ul>
    </div>
  );
}
