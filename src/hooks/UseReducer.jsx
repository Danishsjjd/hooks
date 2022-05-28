import { useReducer, useState } from "react";
import Todo from "../components/Todo";

export const ACTIONS = {
	ADD_TODO: "add-todo",
	TOGGLE_COMPLETED: "toggle-completed",
	DELETE_TODO: "delete-todo",
};

function reducer(state, action) {
	switch (action.type) {
		case ACTIONS.ADD_TODO: {
			return [...state, action.payload];
		}
		case ACTIONS.DELETE_TODO: {
			return state.filter((todo) => todo.id != action.payload.id);
		}
		case ACTIONS.TOGGLE_COMPLETED: {
			return state.map((todo) => {
				if (todo.id === action.payload.id) {
					return { ...todo, completed: !todo.completed };
				} else return todo;
			});
		}
		default:
			return state;
	}
}
const UseReducer = () => {
	const [todo, dispatch] = useReducer(reducer, []);
	const [name, setName] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch({
			type: ACTIONS.ADD_TODO,
			payload: { name: name, id: Date.now() },
		});
		setName("");
	};
	return (
		<>
			<form onSubmit={submitHandler}>
				<input value={name} onChange={(e) => setName(e.target.value)} />
			</form>
			{todo.map((singleTodo) => {
				return (
					<Todo
						key={singleTodo.id}
						todo={singleTodo}
						dispatch={dispatch}
					/>
				);
			})}
		</>
	);
};

export default UseReducer;
