import React from "react";

export default function TodoItem({
  id,
  text,
  onDelete,
  onEdit,
  onSaveEdit,
  onCancelEdit,
  isEditing,
  editingText,
  setEditingText,
}) {
  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
          />
          <button onClick={() => onSaveEdit(id)}>확인</button>
          <button onClick={onCancelEdit}>취소</button>
        </>
      ) : (
        <>
          <span>{text}</span>
          <button onClick={() => onEdit(id, text)}>수정</button>
          <button onClick={() => onDelete(id)}>삭제</button>
        </>
      )}
    </li>
  );
}
