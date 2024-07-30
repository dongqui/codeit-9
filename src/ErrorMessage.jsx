const RAINBOW_COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "navy",
  "purple",
];

export default function ErrorMessage({ color }) {
  const isRainbowColor = color && !RAINBOW_COLORS.includes(color);

  if (isRainbowColor) {
    return <>무지개 색이 아닌데요!!??</>;
  }
  return "";
}
