import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";
import { getTodoList, createTodo, updateTodo, deleteTodo } from "./api";

export default function App() {
  const [list, setList] = useState([]);

  const handleInput = async (inputVal) => {
    const newTodo = await createTodo(inputVal);
    setList([...list, newTodo]);
  };

  const handleModifyClick = async (targetValue) => {
    const modifiedList = list.filter((item) => {
      return item.id !== targetValue.id;
    });

    const updatedTodo = await updateTodo(targetValue);

    setList([updatedTodo, ...modifiedList]);
  };

  const handleDeleteClick = async (id) => {
    const deleteItem = await deleteTodo(id);

    const deletedList = list.filter((item) => {
      return item.id !== deleteItem.id;
    });

    setList(deletedList);
  };

  useEffect(() => {
    const todoList = async () => {
      const todo = await getTodoList();
      setList(todo);
    };

    todoList();
  }, []);

  return (
    <div>
      <TodoInput onClick={handleInput} />
      <ul>
        {list.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            clickDelete={handleDeleteClick}
            clickModify={handleModifyClick}
          />
        ))}
      </ul>
    </div>
  );
}
