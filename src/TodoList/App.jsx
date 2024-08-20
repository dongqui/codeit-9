import { useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

export default function App() {
  const [todos, setTodos] = useState([]);

  const getAPI = async () => {
    const response = await fetch('/todos');
    const data = await response.json();
    setTodos(data);
  };

  const postAPI = async (newTodo) => {
    const response = await fetch('/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo),
    });
    const data = await response.json();
    setTodos([...todos, data]);
  };

  const handleAddTodo = (newTodo) => postAPI(newTodo);

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleModify = (modifiedTodo) => {
    const modifiedTodos = todos.map((todo) => (todo.id === modifiedTodo.id ? modifiedTodo : todo));
    setTodos(modifiedTodos);
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <div>
      <TodoInput onAdd={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} item={todo} onDelete={handleDelete} onModify={handleModify} />
        ))}
      </ul>
    </div>
  );
}
