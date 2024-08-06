const COLORS = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];

export default function ErrorBox({ color }) {
  if (COLORS.includes(color)) return "";
  else <>무지개 색이 아닌데요!!??</>;
}
