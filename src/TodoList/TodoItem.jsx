export default function TodoItem({
  item,
  text,
  handleDeleteTodo,
  handleUpdateTodo,
}) {
  return (
    <li>
      <div>
        <input type="text" value={text}></input>
      </div>
      <button type="button" onClick={() => handleDeleteTodo(item.id)}>
        삭제
      </button>
      <button type="button" onClick={() => handleUpdateTodo(item.id, text)}>
        수정
      </button>
    </li>
  );
}
