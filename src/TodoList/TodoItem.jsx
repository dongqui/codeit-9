export default function TodoItem({ key, text }) {
  return (
    <li key={key}>
      {text}
      <button type="button">삭제</button>
      <button type="button">수정</button>
    </li>
  );
}
