export default function TodoItem({ id, title, onDelete }) {
  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <li key={id}>
      <span>{title}</span>
      <button type='button' onClick={() => handleDelete(id)}>
        삭제
      </button>
      <button type='button'>수정</button>
    </li>
  );
}
