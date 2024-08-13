import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = (todo) => {
    setTodos((prevTodos) => [todo, ...prevTodos]);
  };

  const deleteTodo = (id) => {
    const nextTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...nextTodos]);
  };

  const inputChange = (value) => {
    setInputValue(value);
  };

  const editTodo = (id, inputValue) => {
    const editedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, inputValue: inputValue } : todo
    );
    setTodos(editedTodos);
  };

  return (
    <div>
      <TodoInput addTodo={addTodo} inputChange={inputChange} />
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              text={todo}
              onDelete={deleteTodo}
              onEdit={editTodo}
              editedTodos={inputValue}
            />
          );
        })}
      </ul>
    </div>
  );
}
