import React, { useContext, useState } from 'react';
import TodoItem from '../../components/TodoItem';
import TodosContext from '../../contexts/TodosContext';
import InfiniteScroll from 'react-infinite-scroll-component';
const TodosList = () => {
	const { todos } = useContext(TodosContext);
	const [page, setPage] = useState(1);
	const per_page = 20;

	if (!todos.length) return <h1>Loading...</h1>;
	return (
		<InfiniteScroll
			dataLength={page * per_page} //This is important field to render the next data
			next={() => setPage(page + 1)}
			hasMore={todos.length > page * per_page}
			loader={<h4>Loading...</h4>}
			endMessage={
				<p className='text-center my-10'>
					<b>No more todos YEY :)</b>
				</p>
			}
			refreshFunction={() => setPage(1)}
			pullDownToRefresh
			pullDownToRefreshThreshold={50}
			pullDownToRefreshContent={
				<h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
			}
			releaseToRefreshContent={
				<h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
			}
		>
			<div className='grid grid-cols-3 gap-4'>
				{todos.slice(0, page * per_page).map((todo, index) => (
					<TodoItem key={index} todo={todo} />
				))}
			</div>
		</InfiniteScroll>
	);
};

export default TodosList;
