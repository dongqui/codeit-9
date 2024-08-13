import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleTodoSubmit = (newValue) => {
    setTodos((prevTodos) => [...prevTodos, newValue]);
  };

  const onDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  };

  const onUpdate = (id, value) => {
    console.log(value);
    setTodos((prev) => {
      const splitIdx = prev.findIndex((item) => item.id === id);
      const sliced = prev.slice(0, splitIdx);
      const sliced2 = prev.slice(splitIdx + 1);

      return [
        ...sliced,
        {
          id,
          title: value,
        },
        ...sliced2,
      ];
    });
  };

  return (
    <div>
      <TodoInput onSubmit={handleTodoSubmit} />
      <ul>
        {todos?.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}
