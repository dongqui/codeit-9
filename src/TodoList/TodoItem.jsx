export default function TodoItem({ list }) {
  return list.map((item) => {
    <li>
      <button type="button">삭제</button>
      <button type="button">수정</button>
    </li>;
  });
}
