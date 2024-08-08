import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {

  const [inputValue, setInputValue] = useState('');
  const [itemList, setItemList] = useState(TodoItem);

  const handleInputChange = (value) => {
    setInputValue(value);
  };



  return (
    <div>
      <TodoInput onInputChange={handleInputChange} />
      <ul>
        <TodoItem />
      </ul>
    </div>
  );
}
