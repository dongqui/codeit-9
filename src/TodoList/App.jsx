import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import useTodoList from "./useTodoList";

export default function App() {
  const [todoList, setTodoList] = useTodoList();

  const addTodo = async (title) => {
    const res = await fetch("/todos", {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
    });
    const newTodo = await res.json();
    setTodoList([...todoList, newTodo]);
  };

  const deleteTodo = async (id) => {
    const res = await fetch(`/todos/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setTodoList(todoList.filter((todo) => todo.id !== id));
    }
  };

  const editTodo = async ({ id, title }) => {
    const res = await fetch(`/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title,
      }),
    });
    if (res.ok) {
      const editedTodo = await res.json();
      setTodoList(todoList.map((todo) => (todo.id === id ? editedTodo : todo)));
    }
  };

  return (
    <div>
      <TodoInput onAddClick={addTodo} />
      <ul>
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            onDeleteClick={deleteTodo}
            onEditConfirmClick={editTodo}
          />
        ))}
      </ul>
    </div>
  );
}
