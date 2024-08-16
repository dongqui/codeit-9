import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";
import { getTodoList } from "./api";

export default function App() {
  const [list, setList] = useState([]);

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
    const todoList = async () => {
      const todo = await getTodoList();
      setList(todo);
    };

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
