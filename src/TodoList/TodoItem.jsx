import { useState } from "react";

export default function TodoItem({ value, id, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);

  const handleSave = () => {
    onUpdate(id, editValue);
    setEditing(false);
  };

  return (
    <li>
      {editing ? (
        <>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
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
          {value}
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
