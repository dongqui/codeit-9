import { useState } from "react";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const handleAddClick = (todo) => setTodoList([todo, ...todoList]);
  const handleDeleteClick = (id) =>
    setTodoList(todoList.filter((todo) => todo.id !== id));

  return (
    <div>
      <TodoInput onAddClick={handleAddClick} />
      <ul>
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            onDeleteClick={handleDeleteClick}
          />
        ))}
      </ul>
    </div>
  );
}
