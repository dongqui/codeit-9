const RAINBOW_COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];

const ErrorMessage = ({ color }) => {
  return <div style={RAINBOW_COLORS ? color : ''}>무지개 색이 아닌데요?!</div>;
};

export default ErrorMessage;
