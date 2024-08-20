import { useState } from "react";
import "./Modal.css";

function Modal({ title, onSave, onClose }) {
  const [inputValue, setInputValue] = useState(title);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      if (!inputValue.trim()) {
        alert("할 일을 입력하세요.");
        return;
      }
      onSave(inputValue.trim());
    }
    if (e.key === "Escape") {
      onClose();
    }
  };

  const handleSaveClick = () => {
    if (!inputValue.trim()) {
      alert("할 일을 입력하세요.");
      return;
    }
    onSave(inputValue.trim());
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>수정하기</h2>
        <input
          type="text"
          autoFocus
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="할 일을 입력하세요."
        />
        <div className="modal-actions">
          <button onClick={handleSaveClick}>저장</button>
          <button onClick={onClose}>취소</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
