export default function TodoItem({ todo, onDelete, onUpdate }) {
  const [editTodoId, setEditTodoId] = useState('');
  const [editTodoContent, setEditTodoContent] = useState('');

  const onClickDeleteButton = () => {
    onDelete(todo.id);
  };

  const onClickUpdateButton = (id, content) => {
    editTodoId(id);
    editTodoContent(content);
  };

  return (
    <li>
      {todo.title}
      <button type="button" onClick={onClickDeleteButton}>
        삭제
      </button>
      
      { editTodoId === todo.id ? (
      <button type="button" onClick={onClickUpdateButton(editTodoId, editTodoContent)}>
        수정
      </button>
      ) : 
        <button>확인</button>
        <button>취소</button>
      }
    </li>
  );
}
