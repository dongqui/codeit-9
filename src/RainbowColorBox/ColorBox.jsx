export default function ColorBox({ color }) {
  return (
    <div
      style={{
        backgroundColor: color,
        height: "200px",
        width: "200px",
        border: "2px dashed black",
      }}
    />
  );
}
