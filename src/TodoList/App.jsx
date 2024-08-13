import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { useState } from 'react';

export default function App() {
	const [todos, setTodos] = useState([]);

	const handleAddTodo = (newTodo) => {
		setTodos([...todos, newTodo]);
	};

	const handleDelete = (id) => {
		const nextTodos = todos.filter((todos) => todos.id !== id);
		setTodos(nextTodos);
	};

  return (
    <div>
      <TodoInput onAdd={handleAddTodo} />
      <ul>
				{todos.map((todo) => (
					<TodoItem key={todo.id} item={todo} onDelete={handleDelete} />
				))}  
      </ul>
    </div>
  );
}
