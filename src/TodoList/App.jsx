import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { useState } from 'react';

export default function App() {
	const [todos, setTodos] = useState([]);
	const [currentTodo, setCurrentTodo] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleAddTodo = (newTodo) => {
		setTodos([...todos, newTodo]);
	};

	const handleDelete = (id) => {
		const nextTodos = todos.filter((todos) => todos.id !== id);
		setTodos(nextTodos);
	};

	const handleEditClick = (id) => {
		const todoEdit = todos.find((todo) => todo.id === id);
		setCurrentTodo(todoEdit);
	}

	const handleModify = (modifiedTodo) => {
		const modifyedTodos = todos.map((todo) => (todo.id === modifiedTodo.id ? modifiedTodo : todo));
		setTodos(modifyedTodos);
	}

  return (
    <div>
      <TodoInput onAdd={handleAddTodo} currentTodo={currentTodo} onEdit={handleModify} />
      <ul>
				{todos.map((todo) => (
					<TodoItem key={todo.id} item={todo} onDelete={handleDelete} onEdit={handleEditClick}/>
				))}  
      </ul>
    </div>
  );
}
