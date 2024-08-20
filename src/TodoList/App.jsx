import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const [toDoList, setToDoList] = useState([]);
  
  const onSubmit = async (title) => {
    try {
      const response = await fetch("/todos", {
        method: "POST",
        body: JSON.stringify({ title }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("onSubmit POST 요청에서 오류 발생");
      }

      const data = await response.json();

      setToDoList((prevToDo) => [...prevToDo, { id: data.id, title: data.title }]);
    } catch (error) {
      console.error("onSubmit POST 요청에서 오류 발생", error);
    }
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

        if (!response.ok) {
          throw new Error("getData에서 오류 발생");
        }

        const data = await response.json();
        setToDoList(data);
      } catch (error) {
        console.error("getData에서 오류 발생", error);
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
