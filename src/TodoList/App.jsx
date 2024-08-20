import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import "../api.js";
import {
  createTodoList,
  deleteTodoList,
  getTodoList,
  updateTodo,
} from "../api.js";

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
    // console.log(todoList);
  }, []);

  const addTodo = async (title) => {
    const result = await createTodoList(title);
    setTodoList([result, ...todoList]);
  };

  const onDelete = async (id) => {
    await deleteTodoList(id);
    setTodoList(todoList.filter((todoItem) => todoItem.id !== id));
  };

  const onUpdate = async (id, newValue) => {
    const updatedTodo = await updateTodo(id, newValue);
    setTodoList(todoList.map((todo) => (todo.id === id ? updatedTodo : todo)));
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
