import './App.css';

export const ResetButton = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick} className="Reset-button">
        Reset
      </button>
    </div>
  );
};
