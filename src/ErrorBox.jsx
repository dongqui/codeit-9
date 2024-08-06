const COLORS = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];

export default function ErrorBox({ color }) {
  //console.log(color);
  return <>{!COLORS.includes(color) && "무지개 색이 아닌데요!!??"}</>;
}
