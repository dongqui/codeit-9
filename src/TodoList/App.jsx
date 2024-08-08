import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

let id = 0;

export default function App() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
    id = id + 1;

    return id;
  }

  return (
    <div>
      <TodoInput />
      <ul>
        <TodoItem />
      </ul>
    </div>
  );
}
