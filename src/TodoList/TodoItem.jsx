export default function TodoItem({ item, onClick }) {
  const handleDelete = () => {
    onClick(item.id);
  };

  const handleModify = (e) => {
    const inputElement = document.createElement("input");
    const okButton = document.createElement("button");
    const cancelButton = document.createElement("button");
    okButton.innerHtml = "확인";
    cancelButton.innerHtml = "취소";
    document.body.appendChild(inputElement);
    document.body.appendChild(okButton);
    document.body.appendChild(cancelButton);
  };
  return (
    <li>
      {item.title}
      <button type="button" onClick={handleDelete}>
        삭제
      </button>
      <button type="button" onClick={handleModify}>
        수정
      </button>
    </li>
  );
}
