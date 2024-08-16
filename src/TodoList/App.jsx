import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);

  const handleAddTodo = (newTodo) => setTodos([...todos, newTodo]);

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEditClick = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setCurrentTodo(todoToEdit);
  };

  const handleModify = (modifiedTodo) => {
    const modifiedTodos = todos.map((todo) => (todo.id === modifiedTodo.id ? modifiedTodo : todo));
    setTodos(modifiedTodos);
    setCurrentTodo(null);
  };

  return (
    <div>
      <TodoInput onAdd={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} item={todo} onDelete={handleDelete} onEdit={handleEditClick} isEditing={currentTodo && currentTodo.id === todo.id} onModify={(text) => handleModify({ ...todo, text })} />
        ))}
      </ul>
    </div>
  );
}
