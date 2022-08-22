import todos from '../data/todos';
export const GET_TODOS = async () => {
	return new Promise((res, rej) => {
		setTimeout(() => res(todos), 2000);
	});
};
