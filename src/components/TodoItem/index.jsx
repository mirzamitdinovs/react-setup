import React from 'react';
import { Card } from 'flowbite-react';
const TodoItem = ({ todo }) => {
	return (
		<Card>
			<h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
				{todo.title}
			</h5>
		</Card>
	);
};

export default TodoItem;
