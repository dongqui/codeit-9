const RAINBOW_COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "navy",
  "purple",
];

const ErrorMessage = ({ color }) => {
  const isColor = RAINBOW_COLORS.includes(color);

  if (!isColor) {
    return <div>무지개색이 아닙니다</div>;
  }
};

export default ErrorMessage;
