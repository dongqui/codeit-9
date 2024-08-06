const RAINBOW_COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];

const ErrorMessage = ({ color }) => {
  const isRainbowColor = RAINBOW_COLORS.includes(color);
  return <>{!isRainbowColor && <div>무지개 색이 아닌데요?!</div>}</>;
  // const isRainbowColor = !RAINBOW_COLORS.every(val => color !== val);
  // if (!isRainbowColor) {
  //   return (
  //     <>
  //       <div>무지개 색이 아닌데요?!</div>
  //     </>
  //   );
  // }
};

export default ErrorMessage;
