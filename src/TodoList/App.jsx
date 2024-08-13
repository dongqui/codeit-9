import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import { useState } from 'react';
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
    const modifyedTodos = todos.map((todo) => (todo.id === modifiedTodo.id ? modifiedTodo : todo));
    setTodos(modifyedTodos);
  };
  return (
    <div>
      <TodoInput onAdd={handleAddTodo} currentTodo={currentTodo} onEdit={handleModify} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} item={todo} onDelete={handleDelete} onEdit={handleEditClick} />
        ))}
      </ul>
    </div>
  );
}
