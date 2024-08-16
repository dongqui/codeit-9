import { useState } from "react";

export default function TodoItem({ text, onDelete, onEdit }) {
  const [inputValue, setInputValue] = useState("");
  const [inputVisible, setInputVisible] = useState(false);

  const handleDeleteClick = () => {
    onDelete(text.id);
  };

  const handleEditClick = () => {
    if (inputVisible) {
      onEdit(text.id, inputValue);
      setInputVisible(false);
    } else {
      setInputVisible(true);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <li>
      {text.inputValue}
      <button type="button" onClick={handleDeleteClick}>
        삭제
      </button>
      <button type="button" onClick={handleEditClick}>
        수정
      </button>
      {inputVisible && (
        <input type="text" value={inputValue} onChange={handleInputChange} />
      )}
    </li>
  );
}
