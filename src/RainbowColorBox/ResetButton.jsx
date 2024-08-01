function ResetButton({ resetColor }) {
  const Reset = () => resetColor();
  return <ResetButton onClick={reset}></ResetButton>;
}

export default ResetButton;
