import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { useEffect, useState } from 'react';

export default function App() {
	const [todos, setTodos] = useState([]);


	const addTodo = async(title) => {
		const response = await fetch('/todos', {
			method: "POST",
			body: JSON.stringify({title})
		})
		const newTodo = await response.json();
		setTodos([...todos, newTodo]);
	};

	const editTodo = async({id, title}) => {
		const response = await fetch('/todos', {
			method: "PATCH",
			body: JSON.stringify({title})
		})
		if(response.ok) {
			const editedTodo = await response.json();
			setTodos(todos.map((todo) => (todo.id === id ? editedTodo : todo)));
		}
	};

	// const handleAddTodo = (newTodo) => {
	// 	setTodos([...todos, newTodo]);
	// };

	const handleDelete = (id) => {
		const nextTodos = todos.filter((todo) => todo.id !== id);
		setTodos(nextTodos);
	};
	const handleModify = (modifiedTodo) => {
    const modifiedTodos = todos.map((todo) => (todo.id === modifiedTodo.id ? modifiedTodo : todo));
    setTodos(modifiedTodos);
  };

	useEffect(() => {
		const getAPI = async () => {
			const response = await fetch('/todos');
			const data = await response.json();
			setTodos(data);
		};

		getAPI();
	}, []);

  return (
    <div>
      <TodoInput onAdd={addTodo} onEdit={handleModify} />
      <ul>
				{todos.map((todo) => (
					<TodoItem 
						key={todo.id} 
						item={todo} 
						onDelete={handleDelete} 
						onEidit={editTodo}
					/>
				))}  
      </ul>
    </div>
  );
}
