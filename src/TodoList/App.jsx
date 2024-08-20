import { useEffect, useState } from "react";
import { getTodo, postTodo, updateTodo } from "./api.js";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const handleOnClick = async (title) => {
    const newTodo = await postTodo(title);
    setTodoList([...todoList, newTodo]);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getTodo();
      setTodoList(data);
    };
    getData();
  }, []);

  const handleDelete = (id) => {
    const nextTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(nextTodoList);
  };

  const handleUpdate = async (id, title) => {
    const nextTodo = await updateTodo(id, title);
    setTodoList(todoList.map((todo) => (todo.id === id ? nextTodo : todo)));
  };

  return (
    <div>
      <TodoInput onSubmit={handleOnClick} />
      <ul>
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            value={todo.value}
            id={todo.id}
            onSubmit={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}
