import { useRef } from "react";
import ColorBox from "./ColorBox";
import "./App.css";

// color (red, #ff0000 2가지)
// 상태값 정의, 컬러 박스 변경
function App() {
  const textRef = useRef();
  let color = "";

  const handleKeyDown = (e) => {
    color = textRef.current.value.trim();
  };

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input type="text" ref={textRef} onKeyDown={handleKeyDown} />
      </div>
      <ColorBox props={color} />
    </div>
  );
}

export default App;
