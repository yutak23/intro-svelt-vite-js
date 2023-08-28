// eslint-disable-next-line import/no-unresolved
import { writable, derived } from 'svelte/store';

export const name = writable('world');

export const greeting = derived(name, ($name) => `Hello ${$name}!`);
