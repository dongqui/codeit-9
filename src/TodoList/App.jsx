import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const [toDoList, setToDoList] = useState([]);

  const onSubmit = (id, value) => {
    setToDoList((prevToDo) => [...prevToDo, { id: id++, value }]);
  };

  const onDeleteToDoList = (id) => {
    setToDoList((prevList) => prevList.filter((item) => item.id !== id));
  };

  const onEditToDoList = (id, newValue) => {
    setToDoList((prevList) =>
      prevList.map((item) => (item.id === id ? { ...item, value: newValue } : item))
    );
  };

  return (
    <div>
      <TodoInput onSubmit={onSubmit} />
      <ul>
        {toDoList.map((toDo) => (
          <TodoItem
            key={toDo.id}
            id={toDo.id}
            toDo={toDo}
            onDeleteToDoList={onDeleteToDoList}
            onEditToDoList={onEditToDoList}
          />
        ))}
      </ul>
    </div>
  );
}
