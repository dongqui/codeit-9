import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (addTodo) => {
    setTodos([...todos, addTodo]);
  };

  const handleDeleteTodo = (targetId) => {
    const nextTodos = todos.filter((todo) => todo.id !== targetId);
    setTodos(nextTodos);
  };

  return (
    <div>
      <TodoInput onAdd={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            id={todo.id}
            key={todo.id}
            text={todo.text}
            onClick={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}
