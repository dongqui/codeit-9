import { useRef, useState } from "react";

let id = 0;

export default function TodoInput({ onClick }) {
  const inpuRef = useRef();

  const handleInput = () => {
    onClick(inpuRef.current.value, id);
    id++;
  };

  return (
    <>
      <input ref={inpuRef} />
      <button onClick={handleInput}>입력</button>
    </>
  );
}
