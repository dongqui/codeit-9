import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import "../api.js";
import { getTodoList } from "../api.js";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTodoList();
        setTodoList(data);
      } catch (error) {
        console.log("데이터를 불러오는데 실패하였습니다.");
      }
    };
    fetchData();
    console.log(todoList);
  }, []);

  const addTodo = (list) => {
    setTodoList([list, ...todoList]);
  };
  const onDelete = (id) => {
    setTodoList(todoList.filter((todoItem) => todoItem.id !== id));
  };

  const onUpdate = (id, newValue) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, value: newValue } : todo
      )
    );
  };

  return (
    <div>
      <TodoInput onSubmit={addTodo} />
      <ul>
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </ul>
    </div>
  );
}
