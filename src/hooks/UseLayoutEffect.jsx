import { useRef, useState, useLayoutEffect } from "react";
const UseLayoutEffect = () => {
	const [show, setShow] = useState(false);
	const button = useRef();
	const popup = useRef();

	useLayoutEffect(() => {
		if (button.current == null || popup.current == null) return;
		const { bottom } = button.current.getBoundingClientRect();
		popup.current.style.top = `${bottom + 25}px`;
	}, [show]);

	return (
		<>
			<button ref={button} onClick={() => setShow((pre) => !pre)}>
				Toggle popup
			</button>
			{show && (
				<div style={{ position: "absolute" }} ref={popup}>
					This is the popup
				</div>
			)}
		</>
	);
};

export default UseLayoutEffect;
