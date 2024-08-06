

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
  if (RAINBOW_COLORS.some(color)) {
    return(
      <>
         <p>무지개 색이 아닙니다. 무지개 색상을 입력해주세요.</p>
      </>
    )
  } 
}
export default ErrorMessage