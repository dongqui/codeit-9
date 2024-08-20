import { useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import axios from 'axios';

export default function App() {
  const [todos, setTodos] = useState([]);

  const getAPI = async () => {
    const response = await fetch('/todos');
    const data = await response.json();
    setTodos(data);
  };

  // const postAPI = async (newTodo) => {
  //   const response = await fetch('/todos', {
  //     method: 'POST',
  //     body: JSON.stringify(newTodo),
  //   });
  //   const data = await response.json();
  //   setTodos([...todos, data]);
  // };
  //axios
  const postAPI = async (newTodo) => {
    const response = await axios.post('/todos', newTodo);
    setTodos([...todos, response.data]);
  };

  const patchApi = async (modifiedTodo) => {
    const response = await axios.patch(`/todos/${modifiedTodo.id}`, modifiedTodo);
    setTodos(todos.map((todo) => (todo.id === modifiedTodo.id ? response.data : todo)));
  };

  const handleAddTodo = (newTodo) => postAPI(newTodo);

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleModify = (modifiedTodo) => patchApi(modifiedTodo);

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
