import { useState, useRef, useEffect } from "react";

const UseRef = () => {
	const [name, setName] = useState("");
	const renderCount = useRef(0);
	const input = useRef();

	useEffect(() => {
		renderCount.current = renderCount.current + 1;
	});
	return (
		<>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				ref={input}
			/>
			<button onClick={() => input.current.focus()}>focus input</button>
			<div>This component is render {renderCount.current} times</div>
		</>
	);
};

export default UseRef;
