import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);

  const handleInput = (inputVal) => {
    setList([...list, inputVal]);
  };

  const handleModifyInput = (targetValue) => {
    list.forEach((item) => {
      item.id === targetValue.id && (item.title = targetValue.title);
    });
    setList(list);
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
          <TodoItem
            key={item.id}
            item={item}
            clickDelete={handleDelete}
            clickModify={handleModifyInput}
          />
        ))}
      </ul>
    </div>
  );
}
