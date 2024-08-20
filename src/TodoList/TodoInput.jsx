//임시코드

import { useState } from "react";

//리액트 배열 사용할 때 key값 줘야 해서 만든 코드
let id = 0;

//id를 사용해서 하나씩 id에 추가되는 형식으로 작성

export default function TodoInput({ onAdd }) {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleInputClick = () => {
		if (inputValue) {
		onAdd(inputValue);
		setInputValue('');
		}
	};

  return (
    <>
      <input value={inputValue} onChange={handleInputChange}/>
      <button onClick={handleInputClick}>입력</button>
    </>
  );
}