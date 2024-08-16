export default function TodoItem({ todo, onDelete, setEditId }) {
  const onEdit = () => {
    setEditId(todo.id);
  };

  return (
    <li>
      {todo.text}
      <button type="button" onClick={() => onDelete(todo)}>
        삭제
      </button>
      <button type="button" onClick={onEdit}>
        수정
      </button>
    </li>
  );
}
