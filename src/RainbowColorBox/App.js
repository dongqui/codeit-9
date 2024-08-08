import ColorBox from "./ColorBox";
import "./App.css";
import { useState } from "react";
import ResetButton from "./ResetButton";

function App() {
	const [state, setState] = useState({
    color: "white",
    error: ""
  });

	const RAINBOW_COLORS = [
		"red",
		"orange",
		"yellow",
		"green",
		"blue",
		"navy",
		"purple",
	];

	const onChange = (e) => {
		const newColor = e.target.value;
		if (newColor === "") {
			setState({ color: "white", error: "" });
		} else if (RAINBOW_COLORS.includes(newColor)) {
			setState({ color: newColor, error: "" });
		} else {
      setState((prevState) => ({ ...prevState, error: "무지개 색이 아닙니다" }));
		}
	};

	const handleResetClick = () => {
		setState({ color: "white", error: "" });
	};

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input onChange={onChange}/>
      </div>
      <ColorBox color={state.color}/>
			<ResetButton onClick={handleResetClick} />
      {state.error && <div className="error">{state.error}</div>}
    </div>
  );
}

export default App;
