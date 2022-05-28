import { useState, useEffect, useMemo } from "react";

const UseMemo = () => {
	const [number, setNumber] = useState("");
	const [dark, setDark] = useState(true);
	const doubleNumber = useMemo(() => slowFun(number), [number]);

	const styled = useMemo(
		() => ({
			backgroundColor: dark ? "black" : "#ff9",
			color: dark ? "white" : "black",
		}),
		[dark]
	);

	useEffect(() => {
		console.log("styled is changed");
	}, [styled]);

	return (
		<>
			<input
				value={number}
				onChange={(e) => setNumber(e.target.value)}
				type="number"
			/>
			<div style={styled}>{doubleNumber}</div>
			<button onClick={() => setDark((pre) => (pre ? false : true))}>
				Change Theme
			</button>
		</>
	);
};

export default UseMemo;

function slowFun(number) {
	for (let i = 0; i < 1000000000; i++) {}
	return number * 2;
}
