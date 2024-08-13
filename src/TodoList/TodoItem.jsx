export default function TodoItem({ todo, onDelete }) {
  const onClickDeleteButton = () => {
    onDelete(todo.id);
  };
  return (
    <li>
      {todo}
      <button type="button" onClick={onClickDeleteButton}>
        삭제
      </button>
      <button type="button">수정</button>
    </li>
  );
}
