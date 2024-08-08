import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (addTodo) => {
    setTodos([...todos, addTodo]);
  };

  return (
    <div>
      <TodoInput onAdd={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} text={todo.text} />
        ))}
      </ul>
    </div>
  );
}
