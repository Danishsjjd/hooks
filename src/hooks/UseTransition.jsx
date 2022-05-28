import { useState, useTransition } from "react";

const UseTransition = () => {
	const [pending, startTransition] = useTransition();
	const [list, setList] = useState([]);
	const [name, setName] = useState("");
	const handleChange = (e) => {
		setName(e.target.value);
		startTransition(() => {
			const newList = [];
			const LIST_SIZE = 2000;
			for (let i = 0; i < LIST_SIZE; i++) {
				newList.push(e.target.value);
			}
			setList(newList);
		});
	};
	return (
		<>
			<input type="text" value={name} onChange={(e) => handleChange(e)} />
			{pending
				? "Loading..."
				: list.map((singleItem, index) => {
						return <div key={index}>{singleItem}</div>;
				  })}
		</>
	);
};
export default UseTransition;
