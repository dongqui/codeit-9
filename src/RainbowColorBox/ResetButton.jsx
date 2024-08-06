export default function ResetButton({ click }) {
  return (
    <button
      type="button"
      style={{
        height: "30px",
        width: "100px",
        border: "1px",
      }}
      onClick={click}
    >
      초기화
    </button>
  );
}
