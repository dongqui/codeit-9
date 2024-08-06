export default function TodoItem({ title }) {
  return (
    <li>
      {title}
      <button type="button">삭제</button>
      <button type="button">수정</button>
    </li>
  );
}
