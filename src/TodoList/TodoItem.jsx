export default function TodoItem({ item, onClick }) {
  const handleDelete = () => {
    onClick(item.id);
  };
  return (
    <li key={item.id}>
      {item.title}
      <button type="button" onClick={handleDelete}>
        삭제
      </button>
      <button type="button">수정</button>
    </li>
  );
}
