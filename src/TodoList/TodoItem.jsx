import { useState } from "react";

export default function TodoItem({ value, key, onDelete }) {
  return (
    <li key={key}>
      {value}
      <button type="button" onClick={() => onDelete}>
        삭제
      </button>
      <button type="button">수정</button>
    </li>
  );
}
