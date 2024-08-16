import { useState } from 'react';

export default function TodoItem({ item, onDelete, onEdit, isEditing, onModify }) {
  const [inputValue, setInputValue] = useState(item.text);

  const handleDeleteClick = () => {
    onDelete(item.id);
  };

  const handleEditClick = () => {
    onEdit(item.id);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    onModify(inputValue);
  };

  return (
    <li>
      {isEditing ? <input type="text" value={inputValue} onChange={handleInputChange} onBlur={handleInputBlur} autoFocus /> : <span>{item.text}</span>}
      <button type="button" onClick={handleDeleteClick}>
        삭제
      </button>
      <button type="button" onClick={handleEditClick}>
        수정
      </button>
    </li>
  );
}
