import { useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import { getTodoList } from './api';

export default function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchTodoList = async () => {
      const data = await getTodoList();
      setTodoList(data);
    };

    fetchTodoList();
  }, []);

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
