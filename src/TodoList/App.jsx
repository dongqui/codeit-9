import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { getTodos, updateTodos } from "./api";

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleTodoSubmit = (newValue) => {
    setTodos((prevTodos) => [...prevTodos, newValue]);
  };

  const onDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  };

  const onUpdate = ({ id, title }) => {
    setTodos((prev) => {
      const splitIdx = prev.findIndex((item) => item.id === id);
      const sliced = prev.slice(0, splitIdx);
      const sliced2 = prev.slice(splitIdx + 1);

      return [
        ...sliced,
        {
          id,
          title,
        },
        ...sliced2,
      ];
    });
  };

  const handleFetch = async () => {
    const result = await getTodos();
    setTodos(result);
  };

  const handleUpdate = async (id, title) => {
    try {
      const updatedTodo = await updateTodos(id, title);
      onUpdate(updatedTodo);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePost = async (title) => {};

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div>
      <TodoInput onSubmit={handleTodoSubmit} />
      <ul>
        {todos?.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            onUpdate={handleUpdate}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}
