import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

export default function App() {
  const [todoList, setTodoList] = useState([]);

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
