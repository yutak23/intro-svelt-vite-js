import { writable } from 'svelte/store';

// eslint-disable-next-line import/prefer-default-export
export function createTodoStore(initial) {
	let uid = 1;

	const todos = initial.map(({ done, description }) => {
		const todo = {
			id: (uid += 1),
			done,
			description
		};
		return todo;
	});

	const { subscribe, update } = writable(todos);

	return {
		subscribe,
		add: (description) => {
			const todo = {
				id: (uid += 1),
				done: false,
				description
			};

			update(($todos) => [...$todos, todo]);
		},
		remove: (todo) => {
			update(($todos) => $todos.filter((t) => t !== todo));
		},
		mark: (todo, done) => {
			update(($todos) => [...$todos.filter((t) => t !== todo), { ...todo, done }]);
		}
	};
}
