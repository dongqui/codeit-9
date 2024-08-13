export default function TodoItem({ text, onDelete, onEdit, editedTodos }) {
  const handleDeleteClick = () => {
    onDelete(text.id);
  };

  const handleEditClick = () => {
    onEdit(text.id, editedTodos);
  };

  return (
    <li>
      {text.inputValue}
      <button type="button" onClick={handleDeleteClick}>
        삭제
      </button>
      <button type="button" onClick={handleEditClick}>
        수정
      </button>
    </li>
  );
}
