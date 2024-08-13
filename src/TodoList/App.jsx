import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = todo => {
    setTodoList([...todoList, todo]);
  };

  const inputDelete = id => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <ul>
        {todoList.map(todo => (
          // {todo} prop 넘겨줄 때 주의
          <TodoItem key={todo.id} todo={todo} onUpdate={inputUpdate} onDelete={inputDelete} />
        ))}
      </ul>
    </div>
  );
}
