import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { deleteTodo, getTodos, postTodos, updateTodos } from "./api";

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

  const handleSubmit = async (title) => {
    try {
      const newTodo = await postTodos(title);
      handleTodoSubmit(newTodo);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const deleteTodoId = await deleteTodo(id);
      onDelete(deleteTodoId);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div>
      <TodoInput onSubmit={handleSubmit} />
      <ul>
        {todos?.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}
