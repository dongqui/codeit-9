function ResetButton({ setColor }) {
  let resetColor = () => setColor("#ffffff");

  return (
    <>
      <button onClick={resetColor}>초기화</button>
    </>
  );
}

export default ResetButton;
