import { useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import { getTodoList, postTodoList, patchTodoList } from './api';

export default function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchTodoList = async () => {
      const data = await getTodoList();
      setTodoList(data);
    };

    fetchTodoList();
  }, []);

  const onSubmit = async title => {
    const newTodo = await postTodoList(title);
    setTodoList([...todoList, newTodo]);
  };

  const onDelete = async id => {
    setTodoList(todoList.filter(todo => Number(todo.id) !== Number(id)));
  };

  const onUpdate = async (id, updateTodo) => {
    const updateTodos = await patchTodoList();
    setTodoList(updateTodos.map(todo => (Number(todo.id) === Number(id) ? { ...todo, title: updateTodo } : todo)));
  };

  return (
    <div>
      <TodoInput onSubmit={onSubmit} />
      <ul>
        {todoList.map(todo => (
          <TodoItem key={todo.id} todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}
