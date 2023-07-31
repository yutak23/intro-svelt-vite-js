import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-unresolved
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	server: { host: '0.0.0.0', port: 8080 }
});
