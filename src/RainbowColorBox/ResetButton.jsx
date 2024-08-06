export default function ResetButton({ click }) {
  return (
    <button
      type="button"
      style={{
        cursor: "pointer",
      }}
      onClick={click}
    >
      초기화
    </button>
  );
}
