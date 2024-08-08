export default function TodoItem({ item, handleDelete }) {
  const handleDeletClick = () => {
    handleDelete(item.id);
  };

  return (
    <li>
      {item.title}
      <button type="button" onClick={handleDeletClick}>
        삭제
      </button>
      <button type="button">수정</button>
    </li>
  );
}
