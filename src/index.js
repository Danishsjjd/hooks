import React from "react";
import ReactDOM from "react-dom/client";
// useState:- see details in hooks.txt
// useEffect:- async, can preform any lifecycle method and very common
// useCallback:- same as useMemo but its return function instead function return
import UseContext from "./hooks/UseContext";
import UseDeferredValue from "./hooks/UseDeferredValue";
import UseLayoutEffect from "./hooks/UseLayoutEffect";
import UseMemo from "./hooks/UseMemo";
import UseReducer from "./hooks/UseReducer";
import UseRef from "./hooks/UseRef";
import UseTransition from "./hooks/UseTransition";
// coming soon:-
// useDebugValue
// useImperativeHandle
// useId
import TestingCustomHooks from "./container/TestingCustomHooks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <h1>use context</h1>
		<UseContext /> */}
		{/* <h1>use deferred value</h1>
		<UseDeferredValue /> */}
		{/* <h1>use layoutEffect</h1>
		<UseLayoutEffect /> */}
		{/* <h1>use Memo</h1>
		<UseMemo /> */}
		{/* <h1>use Reducer</h1>
		<UseReducer /> */}
		{/* <h1>Use Ref</h1>
		<UseRef /> */}
		{/* <h1>use Transition</h1>
		<UseTransition />	 */}

		<h1>custom hooks</h1>
		<TestingCustomHooks />
	</React.StrictMode>
);
