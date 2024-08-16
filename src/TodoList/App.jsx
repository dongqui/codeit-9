import { useEffect, useState } from "react";
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

  const editTodo = (id, inputValue) => {
    const editedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, inputValue: inputValue } : todo
    );
    setTodos(editedTodos);
  };

  useEffect(() => {
    fetch("/todos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("데이터를 가져오는 데 실패했습니다.");
        }
        return response.json();
      })
      .then((response) => {
        setTodos([...response]);
      });
  });

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              text={todo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          );
        })}
      </ul>
    </div>
  );
}
