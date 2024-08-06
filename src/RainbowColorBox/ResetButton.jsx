import React from "react";

export default function ResetButton({ onClick }) {
  function handleClick() {
    onClick("");
  }
  return <button onClick={handleClick}>초기화</button>;
}
