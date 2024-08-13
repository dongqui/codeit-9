import { useState } from "react";

export default function TodoItem({ id, title, onDelete, onUpdate }) {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(title);

  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleUpdate = (id, value) => {
    onUpdate(id, value);
    setIsEdit(false);
  };

  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };

  const handleEdit = () => {
    setIsEdit((prev) => !prev);
    setValue(title);
  };

  if (isEdit === true) {
    return (
      <li key={id}>
        <input type='text' value={value} onChange={handleChangeInput} />
        <button type='button' onClick={() => handleUpdate(id, value)}>
          확인
        </button>
        <button type='button' onClick={handleEdit}>
          취소
        </button>
      </li>
    );
  }

  return (
    <li key={id}>
      <span>{title}</span>
      <button type='button' onClick={() => handleDelete(id)}>
        삭제
      </button>
      <button type='button' onClick={handleEdit}>
        수정
      </button>
    </li>
  );
}
