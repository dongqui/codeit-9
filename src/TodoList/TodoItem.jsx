export default function TodoItem({ item }) {
  return (
    <li key={item.id}>
      {item.title}
      <button type="button">삭제</button>
      <button type="button">수정</button>
    </li>
  );
}
