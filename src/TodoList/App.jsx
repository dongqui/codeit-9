import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos], { id: todos.length, text: todo });
  };

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <ul>
        <TodoItem />
      </ul>
    </div>
  );
}
