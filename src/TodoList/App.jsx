import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);

  const handleInput = (inputVal) => {
    setList([...list, inputVal]);
  };

  return (
    <div>
      <TodoInput onClick={handleInput} />
      <ul>
        {list.map((item) => (
          <TodoItem item={item} />
        ))}
      </ul>
    </div>
  );
}
