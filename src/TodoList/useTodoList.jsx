import { useState, useEffect } from "react";

export default function useTodoList() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function getTodoList() {
      const res = await fetch("/todos");
      setTodoList(await res.json());
    }

    getTodoList();
  }, []);

  return [todoList, setTodoList];
}
