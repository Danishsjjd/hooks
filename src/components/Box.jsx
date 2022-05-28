import { useTheme, useToggleTheme } from "../context/ThemeProvider";

export default function FunctionContextComponent() {
	const toggle = useToggleTheme();
	const dark = useTheme();
	const themeStyle = {
		backgroundColor: dark ? "#333" : "#ccc",
		color: dark ? "#ccc" : "#333",
		padding: "2rem",
		margin: "2rem",
	};
	return (
		<>
			<div style={themeStyle}>FunctionContextComponent</div>
			<button onClick={() => toggle()}>toggle Theme</button>
		</>
	);
}
