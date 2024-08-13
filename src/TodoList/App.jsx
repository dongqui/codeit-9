import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);

  const handleInput = (inputVal) => {
    setList([...list, inputVal]);
  };

  const handleDelete = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <div>
      <TodoInput onClick={handleInput} />
      <ul>
        {list.map((item) => (
          <TodoItem item={item} onClick={handleDelete} />
        ))}
      </ul>
    </div>
  );
}
