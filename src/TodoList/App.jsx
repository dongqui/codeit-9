import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (list) => {
    setTodoList([list, ...todoList]);
  };
  const onDelete = (id) => {
    setTodoList(todoList.filter((todoItem) => todoItem.id !== id));
  };

  return (
    <div>
      <TodoInput onSubmit={addTodo} />
      <ul>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} value={todo.value} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}
