import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const [toDoList, setToDoList] = useState([]);
  
  const onSubmit = (id, title) => {
    setToDoList((prevToDo) => [...prevToDo, { id: id++, title }]);
  };

  const onDeleteToDoList = (id) => {
    setToDoList((prevList) => prevList.filter((item) => item.id !== id));
  };

  const onEditToDoList = (id, newTitle) => {
    setToDoList((prevList) =>
      prevList.map((item) => (item.id === id ? { ...item, title: newTitle } : item))
    );
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/todos");

        const data = await response.json();
        setToDoList(data);
        
      } catch (error) {
        console.error("getDate에서 오류 발생", error);
      }
    }

    getData();
  }, []);

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
