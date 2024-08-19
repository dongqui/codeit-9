export default function TodoItem({ item, title, onDeleteTodo, onEditTodo }) {
  return (
    <li>
      <div>
        <input type="text" value={title}></input>
      </div>
      <button type="button" onClick={() => onDeleteTodo(item.id)}>
        삭제
      </button>
      <button type="button" onClick={() => onEditTodo(item.id)}>
        수정
      </button>
    </li>
  );
}
