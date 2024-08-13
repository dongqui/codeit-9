export default function TodoItem({ item, text, handleDeleteTodo }) {
  return (
    <li>
      {text}
      <button type="button" onClick={() => handleDeleteTodo(item.id)}>
        삭제
      </button>
      <button type="button">수정</button>
    </li>
  );
}
