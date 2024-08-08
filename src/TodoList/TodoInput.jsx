//임시코드

import { useState } from "react";

//리액트 배열 사용할 때 key값 줘야 해서 만든 코드
let id = 0;

//id를 사용해서 하나씩 id에 추가되는 형식으로 작성

export default function TodoInput() {
	const [todo, setTodo] = useState("");

	const addTodo = () => {
		setTodo([...todo, {id: id++, content: todo}]);
		setTodo("");
	}

  return (
    <>
      <input value={todo} />
      <button>입력</button>
    </>
  );
}