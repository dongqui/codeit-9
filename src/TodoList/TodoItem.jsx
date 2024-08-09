export default function TodoItem({ todoList }) {
  return (
    <li>
      {todoList.titile}
      <button type="button">삭제</button>
      <button type="button">수정</button>
    </li>
  );
}
