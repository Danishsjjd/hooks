import { useMemo, useDeferredValue, useEffect } from "react";

const List = ({ input }) => {
	const deferredValue = useDeferredValue(input);
	const LIST_SIZE = 2000;
	const list = useMemo(() => {
		const l = [];
		for (let i = 0; i < LIST_SIZE; i++) {
			l.push(deferredValue);
		}
		return l;
	}, [deferredValue]);
	useEffect(() => {
		console.log(`input: ${input}\nDeferredValue: ${deferredValue}`);
	}, [input, deferredValue]);
	return list;
};

export default List;
