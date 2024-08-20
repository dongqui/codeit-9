import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const [toDoList, setToDoList] = useState([]);
  console.log(toDoList)
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

      setToDoList((prevToDo) => [...prevToDo, data]);
    } catch (error) {
      console.error("onSubmit POST 요청에서 오류 발생", error);
    }
  };

  const onDeleteToDoList = async (id) => {
    try {
      const response = await fetch(`/todos/${id}`, {
        method: "DELETE"
      });

      if (!response.ok) {
        throw new Error("onDeleteToDoList DELETE 요청에서 오류 발생");
      }

      setToDoList((prevList) => prevList.filter((item) => item.id !== id));
    } catch (error) {
      console.error("onDeleteToDoList DELETE 요청에서 오류 발생", error);
    }
  };

  const onEditToDoList = async (id, newTitle) => {
    try {
      const response = await fetch(`/todos/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ newTitle }),
      });

      if (!response.ok) {
        throw new Error("onEditToDoList PATCH 요청에서 오류 발생");
      }

      setToDoList((prevList) =>
        prevList.map((item) => (item.id === id ? { ...item, title: newTitle } : item))
      );
    } catch (error) {
      console.error("onEditToDoList PATCH 요청에서 오류 발생", error);
    }
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
