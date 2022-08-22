import React, { useEffect, useState } from 'react';
import TodoItem from '../../components/TodoItem';
import { GET_TODOS } from '../../services/todos.service';

const TodosList = () => {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const res = await GET_TODOS();
		if (res) {
			setTodos(res);
			setLoading(false);
		}
		console.log('res: ', res);
	};
	if (loading) return <h1>Loading...</h1>;
	return (
		<div className='grid grid-cols-3 gap-4'>
			{todos.map((todo, index) => (
				<TodoItem key={index} todo={todo} />
			))}
		</div>
	);
};

export default TodosList;
