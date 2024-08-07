import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import useTodoList from "./useTodoList";

export default function App() {
  const [todoList, setTodoList] = useTodoList();

  const addTodo = (newTodo) => setTodoList([newTodo, ...todoList]);
  const deleteTodo = (id) =>
    setTodoList(todoList.filter((todo) => todo.id !== id));
  const editTodo = (editedTodo) => {
    setTodoList(
      todoList.map((todo) => (todo.id === editedTodo.id ? editedTodo : todo))
    );
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
