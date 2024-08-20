import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { getTodo, postTodo, updateTodo, deleteTodo } from "./api";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      const todosData = await getTodo();
      setTodos(todosData);
    };

    fetchTodos();
  }, []);

  const addTodo = async (title) => {
    const newTodo = await postTodo(title);
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandle = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, title) => {
    setEditingId(id);
    setEditingText(title);
  };

  const saveEditTodo = async (id) => {
    const updatedTodo = await updateTodo(id, editingText);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: updatedTodo.title } : todo
      )
    );
    setEditingId(null);
    setEditingText("");
  };

  const cancelEditTodo = () => {
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.title}
            onDelete={deleteTodoHandle}
            onEdit={editTodo}
            onSaveEdit={saveEditTodo}
            onCancelEdit={cancelEditTodo}
            isEditing={editingId === todo.id}
            editingText={editingText}
            setEditingText={setEditingText}
          />
        ))}
      </ul>
    </div>
  );
}
