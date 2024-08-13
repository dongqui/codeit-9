import { useState } from "react";

export default function TodoItem({ item, clickDelete, clickModify }) {
  const [editing, setEditing] = useState(false);
  const [modifyValue, setModifyValue] = useState(item.title);

  const handleDelete = () => {
    clickDelete(item.id);
  };

  const handleModify = () => {
    setEditing(true);
  };

  const handleModifyInput = (e) => {
    setModifyValue(e.target.value);
  };

  const handleOk = () => {
    clickModify({
      title: modifyValue,
      id: item.id,
    });
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  if (editing) {
    return (
      <li>
        <input value={modifyValue} onChange={handleModifyInput} />
        <button type="button" onClick={handleOk}>
          확인
        </button>
        <button type="button" onClick={handleCancel}>
          취소
        </button>
      </li>
    );
  }

  return (
    <li>
      {item.title}
      <button type="button" onClick={handleDelete}>
        삭제
      </button>
      <button type="button" onClick={handleModify}>
        수정
      </button>
    </li>
  );
}
