export default function TodoItem({ todo }) {
  return (
    <li>
      {todo}
      <button type="button">삭제</button>
      <button type="button">수정</button>
    </li>
  );
}
