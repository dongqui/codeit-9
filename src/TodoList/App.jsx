import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";
import getTodos from "./TodoMockServer/handlers";

export default function App() {
  const [list, setList] = useState([]);

  const todoList = async () => {
    const result = await getTodos();
    setList(result);
  };

  const handleInput = (inputVal) => {
    setList([...list, inputVal]);
  };

  const handleModifyInput = (targetValue) => {
    const modifiedList = list.map((item) =>
      item.id === targetValue.id ? { ...item, title: targetValue.title } : item
    );

    setList(modifiedList);
  };

  const handleDelete = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  useEffect(() => {
    todoList();
  }, []);

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
