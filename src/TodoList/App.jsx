import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [todo, ...prevTodos]);
  };

  const deleteTodo = (id) => {
    const nextTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...nextTodos]);
  };

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <ul>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} text={todo} onDelete={deleteTodo} />;
        })}
      </ul>
    </div>
  );
}
