function ErrorMessage({ value }) {
	const RAINBOW_COLORS = [
		"red",
		"orange",
		"yellow",
		"green",
		"blue",
		"navy",
		"purple",
	];

	const rainbowColor = rainbow(color);
	if (value === RAINBOW_COLORS) return '{color}'
	if (value !== RAINBOW_COLORS)
	return (
		<div>
			<p>무지개 색이 아닌데요?!</p>
		</div>
	)
}


export default ErrorMessage;