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
  return <div color={RAINBOW_COLORS} ? style={style} : style='null'>무지개 색이 아닙니다</div>;
};

export default ErrorMessage;
