import { useState } from "react";

export default function TodoItem({ value, handleDelete }) {
  const [edit, setEdit] = useState();
  const [newValue, setNewValue] = useState();

  const handleDeleteClick = () => {
    handleDelete(value.id);
  };

  const inputNewValue = (e) => {
    const newInput = e.target.value;
    setNewValue(newInput);
  };

  const handleEditClick = (e) => {?????????};

  return (
    <li>
      {value}
      <button type="button" onClick={handleDeleteClick}>
        삭제
      </button>
      <button type="button" onClick={}>수정</button>
    </li>
  );
}
