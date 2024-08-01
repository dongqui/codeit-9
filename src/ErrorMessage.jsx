import React from "react";

const RAINBOW_COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "navy",
  "purple",
];

const style = {
  display: "none",
};

const ErrorMessage = ({ color }) => {
  return (
    <div style={RAINBOW_COLORS.includes(color) ? style : null}>
      무지개 색이 아닌데요!?!?
    </div>
  );
};

export default ErrorMessage;
