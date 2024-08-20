import { useState } from 'react';

export default function TodoItem({ item, onDelete, onModify }) {
  console.log('TodoItem render', item);

  const [inputValue, setInputValue] = useState(item.title);
  const [isEditing, setIsEditing] = useState(false);

  const handleDeleteClick = () => {
    onDelete(item.id);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    if (inputValue !== item.title) {
      onModify({ ...item, title: inputValue });
    }
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? <input type="text" value={inputValue} onChange={handleInputChange} onBlur={handleInputBlur} autoFocus /> : <span>{inputValue}</span>}
      <button type="button" onClick={handleDeleteClick}>
        삭제
      </button>
      <button type="button" onClick={handleEditClick}>
        수정
      </button>
    </li>
  );
}
