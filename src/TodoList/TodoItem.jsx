export default function TodoItem({ handleDelete }) {
  return (
    <li>
      예시
      <button type="button" onClick={handleDelete}>
        삭제
      </button>
      <button type="button">수정</button>
    </li>
  );
}
