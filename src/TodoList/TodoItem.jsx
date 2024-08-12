export default function TodoItem({ text, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(text.id);
  };

  return (
    <li>
      {text.inputValue}
      <button type="button" onClick={handleDeleteClick}>
        삭제
      </button>
      <button type="button">수정</button>
    </li>
  );
}
