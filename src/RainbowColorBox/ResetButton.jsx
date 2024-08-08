import { useState } from "react";

export const ResetButton = ({ color }) => {
	const [currentColor, setCurrentColor] = useState(color);

	const handleResetClick = () => {
		setCurrentColor(color);
		console.log('Reset button clicked');
	};
	
	return (
		<div>
			<button className="Reset-button" onClick={handleResetClick}> 
				Reset
			</button>
		</div>
	);
};

export default ResetButton;