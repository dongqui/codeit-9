import { useState } from "react";

export default function TodoItem({
  id,
  title,
  onDeleteClick,
  onEditConfirmClick,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(title);

  const handleInputChange = (e) => setEditValue(e.currentTarget.value);
  const handleEditClick = () => setIsEdit(true);
  const handleCancelClick = () => setIsEdit(false);
  const handleDeleteClick = () => onDeleteClick(id);
  const handleEidtConfirmClick = () => {
    onEditConfirmClick({ id, title: editValue });
    setIsEdit(false);
  };

  return isEdit ? (
    <li>
      <input value={editValue} onChange={handleInputChange} />
      <button type="button" onClick={handleEidtConfirmClick}>
        확인
      </button>
      <button type="button" onClick={handleCancelClick}>
        취소
      </button>
    </li>
  ) : (
    <li>
      {title}
      <button type="button" onClick={handleDeleteClick}>
        삭제
      </button>
      <button type="button" onClick={handleEditClick}>
        수정
      </button>
    </li>
  );
}
