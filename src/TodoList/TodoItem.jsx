export default function TodoItem({ id, text, onDelete, onEdit }) {
  return (
    <li>
      {text}
      <button type="button" onClick={() => onDelete(id)}>
        삭제
      </button>
      <button type="button" onClick={() => onEdit(id)}>
        수정
      </button>
    </li>
  );
}
