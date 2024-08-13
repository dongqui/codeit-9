import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const handleOnClick = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div>
      <TodoInput onSubmit={handleOnClick} />
      <ul>
        {todoList.map((todo) => (
          <TodoItem value={todo.value} />
        ))}
      </ul>
    </div>
  );
}
