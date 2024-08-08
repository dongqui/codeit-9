import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import { useState } from 'react';
export default function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <TodoInput onAdd={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} item={todo} />
        ))}
      </ul>
    </div>
  );
}
