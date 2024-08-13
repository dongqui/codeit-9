export default function TodoItem({ item, onDelete }) {
	const handleDeleteClick = () => onDelete(item.id);

  return (
    <li>
			{item.text}
      <button type="button" onClick={handleDeleteClick}>삭제</button>
      <button type="button">수정</button>
    </li>
  );
}
