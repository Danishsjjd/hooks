import { useState } from "react";
import List from "../components/List";

const UseDeferredValue = () => {
	const [input, setInput] = useState("");

	return (
		<>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<List input={input} />
		</>
	);
};

export default UseDeferredValue;
