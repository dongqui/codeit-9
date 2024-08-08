export default function TodoItem({ id, title }) {
  return (
    <li key={id}>
      {title}
      <button type="button">삭제</button>
      <button type="button">수정</button>
    </li>
  );
}
