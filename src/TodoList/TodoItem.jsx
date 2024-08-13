export default function TodoItem({ id, key, text, handleDeleteTodo }) {
  return (
    <li id={id} key={key}>
      {text}
      <button type="button" onClick={handleDeleteTodo}>
        삭제
      </button>
      <button type="button">수정</button>
    </li>
  );
}
