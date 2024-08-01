export default function ErrorMessage({ color }) {
  const RAINBOW_COLORS = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "navy",
    "purple",
  ];

  const isRainbowColor = RAINBOW_COLORS.some(
    (rainbowColor) => rainbowColor === color
  );

  if (isRainbowColor) {
    return <p>무지개색입니다</p>;
  } else {
    return <p>무지개색이 아닙니다</p>;
  }
}
