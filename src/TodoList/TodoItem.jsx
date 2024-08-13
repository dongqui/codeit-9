export default function TodoItem({ item }) {
  return (
    <li>
			{item.text}
      <button type="button">삭제</button>
      <button type="button">수정</button>
    </li>
  );
}
