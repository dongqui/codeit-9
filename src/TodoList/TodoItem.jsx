export default function TodoItem(key, title) {
  const handleDeleteClick = () => {};
  const handleUpdateClick = () => {};

  return (
    <li key={key}>
      {title}
      <button type="button" onClick={handleDeleteClick}>
        삭제
      </button>
      <button type="button" onClick={handleUpdateClick}>
        수정
      </button>
    </li>
  );
}
