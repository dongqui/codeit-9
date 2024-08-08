import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
	const [items, setItems] = useState([]);

	const handleCreate = (todo) => {
		setItems((prevItems) => [todo, ...prevItems]);
	}

  return (
    <div>
      <TodoInput />
      <ul>
        <TodoItem submitSuccess = { handleCreate[setItems].map }/>
      </ul>
    </div>
  );
}
