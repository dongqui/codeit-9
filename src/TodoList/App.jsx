import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

let nextId = 1;

export default function App() {
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addTodo = (text) => {
    setTodos([...todos, { id: nextId, text }]);
    nextId++;
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  const saveEditTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editingText } : todo
      )
    );
    setEditingId(null);
    setEditingText("");
  };

  const cancelEditTodo = () => {
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            onDelete={deleteTodo}
            onEdit={editTodo}
            onSaveEdit={saveEditTodo}
            onCancelEdit={cancelEditTodo}
            isEditing={editingId === todo.id}
            editingText={editingText}
            setEditingText={setEditingText}
          />
        ))}
      </ul>
    </div>
  );
}
