import './App.css';

export const ResetButton = ({ handleResetClick }) => {
  return (
    <div>
      <button onClick={handleResetClick} className="Reset-button">
        Reset
      </button>
    </div>
  );
};
