export default function TodoItem({ item, onDelete, onEdit }) {
  const handleDeleteClick = () => {
    onDelete(item.id);
  };

  const handleEditClick = () => {
    onEdit(item.id);
  };
  return (
    <li>
      {item.text}
      <button type="button" onClick={handleDeleteClick}>
        삭제
      </button>
      <button type="button" onClick={handleEditClick}>
        수정
      </button>
    </li>
  );
}
