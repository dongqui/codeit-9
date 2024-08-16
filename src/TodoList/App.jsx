import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import worker from "./TodoMockServer/browser.js";

export default function App() {
  const [todos, setTodos] = useState([]);
  setTodos(worker.listHandlers("/todos"));

  const handleAddTodo = (addTodo) => {
    setTodos([...todos, addTodo]);
  };

  const handleDeleteTodo = (targetId) => {
    const nextTodos = todos.filter((todo) => todo.id !== targetId);
    setTodos(nextTodos);
  };

  const handleUpdateTodo = (id, text) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: text } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <TodoInput onAdd={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo}
            text={todo.text}
            handleDeleteTodo={handleDeleteTodo}
            handleUpdateTodo={handleUpdateTodo}
          />
        ))}
      </ul>
    </div>
  );
}
