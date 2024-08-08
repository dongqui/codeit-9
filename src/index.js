import React from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line
import RainbowColorBoxApp from "./RainbowColorBox/App";
import TodoListApp from "./TodoList/App";
import worker from "./TodoList/TodoMockServer/browser";

async function prepare() {
  await worker.start();

  return Promise.resolve();
}

prepare().then(() => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // root.render(<RainbowColorBoxApp />);
  root.render(<TodoListApp />);
});
