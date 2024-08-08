export default function TodoItem({ item, handleDelete }) {
  return (
    <li>
      {item.title}
      <button type="button" onClick={handleDelete}>
        삭제
      </button>
      <button type="button">수정</button>
    </li>
  );
}
