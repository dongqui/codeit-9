import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const handleOnClick = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const handleDelete = (id) => {
    const nextodoList = todoList.filter((item) => item.id !== id);
    setTodoList([...nextodoList]);
  };

  return (
    <div>
      <TodoInput onSubmit={handleOnClick} />
      <ul>
        {todoList.map((todo) => (
          <TodoItem value={todo.value} handleDelete />
        ))}
      </ul>
    </div>
  );
}
