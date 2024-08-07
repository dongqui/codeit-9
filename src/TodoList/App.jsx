import { useState } from "react";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => setTodoList([newTodo, ...todoList]);
  const deleteTodo = (id) =>
    setTodoList(todoList.filter((todo) => todo.id !== id));
  const editTodo = (editedTodo) => {
    setTodoList(
      todoList.map((todo) => (todo.id === editedTodo.id ? editedTodo : todo))
    );
  };
  return (
    <div>
      <TodoInput onAddClick={addTodo} />
      <ul>
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            onDeleteClick={deleteTodo}
            onEditConfirmClick={editTodo}
          />
        ))}
      </ul>
    </div>
  );
}
