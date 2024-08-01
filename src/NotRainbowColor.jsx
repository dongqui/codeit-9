const RAINBOW_COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "navy",
  "purple",
];

export default function NotRainbowColor({ color }) {
  return (
    <div>
      {RAINBOW_COLORS.includes(color) ? (
        <p>무지개 색입니다.</p>
      ) : (
        <p>무지개 색이 아닙니다.</p>
      )}
    </div>
  );
}
