import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const { todoList, setTodoList } = useState([]);

  const handleAddClick = (todo) => {
    setTodoList([todo]);
  };

  return (
    <div>
      <TodoInput onClick={handleAddClick} />
      <ul>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} title={todo.title} />
        ))}
      </ul>
    </div>
  );
}
