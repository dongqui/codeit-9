import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import Modal from "./Modal";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getTodosByApi = async () => {
      const response = await fetch("/todos");
      const data = await response.json();
      setTodos(data);
    };

    getTodosByApi();
  }, []);

  const handleAddTodo = async (addTodo) => {
    const response = await fetch("/todos", {
      method: "POST",
      body: JSON.stringify({ title: addTodo.title }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic YWxhZGRpbjpvcGVuc2VzYW1l", // Token
      },
    });
    const data = await response.json();
    setTodos([...todos, data]);
  };

  const handleDeleteTodo = (targetId) => {
    const nextTodos = todos.filter((todo) => todo.id !== targetId);
    setTodos(nextTodos);
  };

  const handleOpenModal = (id) => {
    if (id !== null) {
      const todoToEdit = todos.find((todo) => todo.id === id);
      setCurrentTodo(todoToEdit);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdateTodo = async (title) => {
    const id = currentTodo.id;
    const response = await fetch(`/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ title }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic YWxhZGRpbjpvcGVuc2VzYW1l", // Token
      },
    });
    const data = await response.json();
    const updatedTodos = todos.map((todo) =>
      todo.id === data.id ? { ...todo, title: title } : todo
    );
    setTodos(updatedTodos);
    handleCloseModal();
  };

  return (
    <div>
      <TodoInput onAdd={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo}
            title={todo.title}
            onDeleteTodo={handleDeleteTodo}
            onEditTodo={handleOpenModal}
          />
        ))}
      </ul>
      {isModalOpen && (
        <Modal
          title={currentTodo.title}
          onSave={handleUpdateTodo}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
