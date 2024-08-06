const COLORS = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];

export default function ErrorBox({ color }) {
  console.log(color);
  if (!COLORS.includes(color)) return <>무지개 색이 아닌데요!!??</>;
  else return "";
}
