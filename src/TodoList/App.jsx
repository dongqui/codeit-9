import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const [value, setValue] = useState([]);

  return (
    <div>
      <TodoInput />
      <ul>
        <TodoItem value={value} />
      </ul>
    </div>
  );
}
