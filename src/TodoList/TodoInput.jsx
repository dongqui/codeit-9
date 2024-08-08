let id = 0;

export default function TodoInput({ onInputChange }) {
 
  let inputValue = '';
  const handleChange = (e) => {
    onInputChange(e.target.value);
  };

  return (
    <>
      <input onChange={inputValue = e.target.value} />
      <button onClick={handleChange}>입력</button>
    </>
  );
}
