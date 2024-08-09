const RAINBOW_COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "navy",
  "purple",
];

function ErrorMessage({ color }) {
  const isRainbowColor = RAINBOW_COLORS.some((value) => value === color)
  console.log(color)
  console.log(isRainbowColor)
  if (isRainbowColor) {
    return(
      <></>
    )}
  return (
    <div>무지개 색이 아닙니다. 무지개 색상을 입력해주세요.</div>
);
}

  
export default ErrorMessage