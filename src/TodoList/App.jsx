import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const [items, setItems] = useState([]);

  const handleOnClick = (item) => {
    setItems((prevItems) => [item, ...prevItems]);
  };

  return (
    <div>
      <TodoInput onSubmit={handleOnClick} />
      <ul>
        <TodoItem />
      </ul>
    </div>
  );
}
