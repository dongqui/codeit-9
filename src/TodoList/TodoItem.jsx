export default function TodoItem() {
  const onDelete = () => {
    
  }

  const onEdit = () => {

  }

  return (
    <li>
      <button type="button" onClick={onDelete}>삭제</button>
      <button type="button" onClick={onEdit}>수정</button>
    </li>
  );
}
