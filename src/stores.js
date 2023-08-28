// eslint-disable-next-line import/no-unresolved
import { readable } from 'svelte/store';

const time = readable(new Date(), (set) => {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});

// eslint-disable-next-line import/prefer-default-export
export { time };
