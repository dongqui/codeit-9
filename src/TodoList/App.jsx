import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

export default function App() {
  const [todoList, setTodoList] = useState('');

  return (
    <div>
      <TodoInput />
      <ul>
        <TodoItem todoList={todoList} />
      </ul>
    </div>
  );
}
