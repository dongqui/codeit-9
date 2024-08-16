import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import { getTodoList } from '../api.js';

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('/todos');
      const data = await response.json();
      setTodoList(data);
    } catch (error) {
      console.error('데이터를 불러오는데 실패하였습니다.');
    }
  };
  fetchData();

  const addTodo = todo => {
    setTodoList([...todoList, todo]);
  };

  const onDelete = id => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  const onUpdate = (id, newTodo) => {
    setTodoList(todoList.map(todo => (todo.id === id ? { ...todo, title: newTodo } : todo)));
  };

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <ul>
        {todoList.map(todo => (
          <TodoItem key={todo.id} todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}
