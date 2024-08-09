export default function TodoItem({ value }) {
  return (
    <li>
      {value}
      <button type="button">삭제</button>
      <button type="button">수정</button>
    </li>
  );
}
