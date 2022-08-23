import { useState, useEffect, createContext } from 'react';
import { GET_TODOS } from '../services/todos.service';

const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const res = await GET_TODOS();
		if (res) {
			setTodos(res);
		}
	};
	return (
		<TodosContext.Provider
			value={{
				todos,
			}}
		>
			{children}
		</TodosContext.Provider>
	);
};

export default TodosContext;
