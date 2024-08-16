import { useState } from "react";

export default function TodoItem({ id, toDo, onDeleteToDoList, onEditToDoList }) {
  const [isEdit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(toDo.title);

  const onDelete = () => {
    onDeleteToDoList(id);
  };

  const onChangeNewTitle = (e) => {
    const userInput = e.target.value;
    setNewTitle(userInput);
  };

  const onEdit = (e) => {
    e.preventDefault();
    onEditToDoList(id, newTitle);
    setEdit(false);
  };

  const onCancel = () => {
    setEdit(false);
  }

  return (
    <li>
      {isEdit ? (
        <form onSubmit={onEdit}>
          <input type="text" value={newTitle} name="newTitle" onChange={onChangeNewTitle} />
          <button type="submit">저장</button>
          <button onClick={onCancel}>취소</button>
        </form>
      ) : (
        <>
          <span>{toDo.title}</span>
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
