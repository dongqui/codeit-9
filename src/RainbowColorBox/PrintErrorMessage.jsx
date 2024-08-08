function PrintErrorMessage({ currentColor }) {
    const RAINBOW_COLORS = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "navy",
        "purple",
    ];

    if (!RAINBOW_COLORS.includes(currentColor)) {
        return (
            <span>무지개 색깔이 아닙니다!!</span>
        )
    }
}
export default PrintErrorMessage;