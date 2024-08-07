export default function TodoItem({ id, title, onDeleteClick }) {
  return (
    <li>
      {title}
      <button type="button" onClick={() => onDeleteClick(id)}>
        삭제
      </button>
      <button type="button">수정</button>
    </li>
  );
}
