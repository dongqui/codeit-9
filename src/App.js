import ColorBox from "./ColorBox";

import "./App.css";

let color = "";
const handleEnter = (e) => {
  if (e.key === "Enter") {
    color = this.target.value;
  }
};

// color (red, #ff0000 2가지)
// 상태값 정의, 컬러 박스 변경
function App() {
  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input type="text" onKeyDown={handleEnter} />
      </div>
      <ColorBox props={color} />
    </div>
  );
}

export default App;
