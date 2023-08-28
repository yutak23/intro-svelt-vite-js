// eslint-disable-next-line import/no-unresolved
import { readable, derived } from 'svelte/store';

export const time = readable(new Date(), (set) => {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});

const start = new Date();

export const elapsed = derived(time, ($time) => Math.round(($time - start) / 1000));
