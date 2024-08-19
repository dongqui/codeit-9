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

  const handleAddTodo = (addTodo) => {
    setTodos([...todos, addTodo]);
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

  const handleUpdateTodo = (title) => {
    const id = currentTodo.id;
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: title } : todo
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
