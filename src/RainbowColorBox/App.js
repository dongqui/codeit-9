import ColorBox from "./ColorBox";

import "./App.css";

function App() {
  const inputTextColor = color => {
    if (input.value) {
      ColorBox;
    } else if (input.value === '') {
      ColorBox;
    }
  };
  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input onInput={inputTextColor} />
      </div>
      <ColorBox />
    </div>
  );
}

export default App;
