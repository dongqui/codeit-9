import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const [items, setItems] = useState([]);

  const handleOnClick = (item) => {
    setItems((prevItems) => [item, ...prevItems]);
  };
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems([...nextItems]);
  };

  return (
    <div>
      <TodoInput onSubmit={handleOnClick} />
      <ul>
        {items.map((item) => {
          return (
            <TodoItem id={item.id} item={item} handleDelete={handleDelete} />
          );
        })}
      </ul>
    </div>
  );
}
