export default function TodoItem({ id, title, onDelete }) {
  return (
    <li key={id}>
      {title}
      <button type="button" onClick={onDelete}>
        삭제
      </button>
      <button type="button">수정</button>
    </li>
  );
}
