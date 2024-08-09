import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleTodoSubmit = (newValue) => {
    const updatedTodos = [...todos, newValue];
    console.log(updatedTodos);
    // setTodos((prev) => [...prev, newValue]);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <TodoInput onSubmit={handleTodoSubmit} />
      <ul>
        {todos?.map((todo) => (
          <TodoItem key={todo.id} title={todo.title} />
        ))}
      </ul>
    </div>
  );
}
