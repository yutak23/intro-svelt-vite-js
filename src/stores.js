// eslint-disable-next-line import/no-unresolved
import { writable } from 'svelte/store';

function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update((n) => n + 1),
		decrement: () => update((n) => n - 1),
		reset: () => set(0)
	};
}

// eslint-disable-next-line import/prefer-default-export
export const count = createCount();
