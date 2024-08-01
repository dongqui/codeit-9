import { useState } from "react";
import ColorBox from "./ColorBox";
import "./App.css";

// color (red, #ff0000 2가지)
// 상태값 정의, 컬러 박스 변경
function App() {
  const [color, setColor] = useState("");

  const handleChangeInput = (e) => {
    setColor(e.currentTarget.value);
  };

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input type="text" onChange={handleChangeInput} />
      </div>
      <ColorBox color={color} />
    </div>
  );
}

export default App;
