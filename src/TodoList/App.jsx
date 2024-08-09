import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = todo => {
    setTodoList(prevTodo => [...prevTodo, todo]);
  };

  return (
    <div>
      <TodoInput addTodoClick={addTodo} />
      <ul>
        {todoList.map(todo => (
          <TodoItem key={todo.id} todo={todo.title} />
        ))}
      </ul>
    </div>
  );
}
