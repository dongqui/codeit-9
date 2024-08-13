import { useState } from "react";

export default function TodoItem({ id, toDo, onDeleteToDoList, onEditToDoList }) {
  const [isEdit, setEdit] = useState(false);
  const [newValue, setNewValue] = useState(toDo.value);

  const onDelete = () => {
    onDeleteToDoList(id);
  };

  const onChangeNewValue = (e) => {
    const userInput = e.target.value;
    setNewValue(userInput);
  };

  const onEdit = (e) => {
    e.preventDefault();
    onEditToDoList(id, newValue);
    setEdit(false);
  };

  const onCancel = () => {
    setEdit(false);
  }

  return (
    <li>
      {isEdit ? (
        <form onSubmit={onEdit}>
          <input type="text" value={newValue} name="newValue" onChange={onChangeNewValue} />
          <button type="submit">저장</button>
          <button onClick={onCancel}>취소</button>
        </form>
      ) : (
        <>
          <span>{toDo.value}</span>
          <button type="button" onClick={onDelete}>
            삭제
          </button>
          <button type="button" onClick={() => setEdit(true)}>
            수정
          </button>
        </>
      )}
    </li>
  );
}
