import { useEffect, useState } from "react";
import { getTodo } from "./api.js";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const getData = async () => {
    const data = await getTodo();
    setTodoList(data);

    useEffect(() => {
      getData();
    }, []);

    const handleOnClick = (newTodo) => {
      setTodoList([...todoList, newTodo]);
    };

    const handleDelete = (id) => {
      const nextTodoList = todoList.filter((item) => item.id !== id);
      setTodoList(nextTodoList);
    };

    const handleEdit = (id, newValue) => {
      setTodoList((prevTodoList) => {
        prevTodoList.map((item) =>
          item.id === id ? { ...item, value: newValue } : item
        );
      });
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
              onDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
    );
  };
}
