export default function TodoItem({
  item,
  title,
  onDeleteTodo,
  onEditTodo,
  disabled,
}) {
  return (
    <li>
      <div>
        <label>{title}</label>
      </div>
      <button
        type="button"
        onClick={() => onDeleteTodo(item.id)}
        disabled={disabled}
      >
        삭제
      </button>
      <button
        type="button"
        onClick={() => onEditTodo(item.id)}
        disabled={disabled}
      >
        수정
      </button>
    </li>
  );
}
