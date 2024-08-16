import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleAddClick = (todo) => {
    setTodoList([todo, ...todoList]);
  };

  const handleListRemove = (todo) => {
    let indexCurrentTodo = todoList.indexOf(todo);
    const newList = [
      ...todoList.slice(0, indexCurrentTodo),
      ...todoList.slice(indexCurrentTodo + 1),
    ];
    setTodoList(newList);
  };

  return (
    <div>
      <TodoInput onAddClick={handleAddClick} />
      <ul>
        {todoList.map((todo) => {
          todo.id === editId && <TodoInput initialTodo={todo} />;
          <TodoItem
            todo={todo}
            key={todo.id}
            title={todo.text}
            onDelete={handleListRemove}
            setEditId={setEditId}
          />;
        })}
      </ul>
    </div>
  );
}
