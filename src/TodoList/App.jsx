import { useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import { getTodoList, postTodoList, patchTodoList, deleteTodoList } from './api';

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
    const deleteTodo = await deleteTodoList(id);
    setTodoList(todoList.filter(todo => Number(todo.id) !== Number(id)));
  };

  const onUpdate = async (id, title) => {
    const updateTodo = await patchTodoList(id, title);
    setTodoList(todoList.map(todo => (Number(todo.id) === Number(id) ? updateTodo : todo)));
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
