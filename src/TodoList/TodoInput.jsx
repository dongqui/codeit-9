// 임시코드
// 리액트 배열 사용 key
// id += 1;
import { useEffect, useState } from 'react';

let id = 0;

export default function TodoInput({ onAdd, currentTodo, onEdit }) {
  const [inputValue, setInputValue] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleInputSubmit = () => {
    if (isEdit) {
      onEdit({ id: currentTodo.id, text: inputValue });
      setInputValue('');
      setIsEdit(false);
      return;
    }
    if (inputValue) {
      onAdd({ id: ++id, text: inputValue });
      setInputValue('');
    }
  };

  useEffect(() => {
    if (currentTodo) {
      setIsEdit(true);
      setInputValue(currentTodo.text);
    }
  }, [currentTodo]);

  return (
    <>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleInputSubmit}>{isEdit ? '수정' : '입력'}</button>
    </>
  );
}
