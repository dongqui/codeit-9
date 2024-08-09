import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  return (
    <div>
      <TodoInput />
      <ul>
        <TodoItem />
      </ul>
    </div>
  );
}
