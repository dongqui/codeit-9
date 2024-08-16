import { useState } from "react";

export default function TodoItem({ title, id, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);

  const handleSave = () => {
    onUpdate(id, editTitle);
    setEditing(false);
  };

  return (
    <li>
      {editing ? (
        <>
          <input
            type="text"
            title={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <button type="button" onClick={handleSave}>
            저장
          </button>
          <button type="button" onClick={() => setEditing(false)}>
            취소
          </button>
        </>
      ) : (
        <>
          {title}
          <button type="button" onClick={() => onDelete(id)}>
            삭제
          </button>
          <button type="button" onClick={() => setEditing(true)}>
            수정
          </button>
        </>
      )}
    </li>
  );
}
