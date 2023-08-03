module.exports = {
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	root: true,
	extends: ['eslint:recommended', 'airbnb-base', 'plugin:svelte/recommended', 'prettier'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			rules: { 'import/prefer-default-export': 'off', 'import/no-mutable-exports': 'warn' }
		}
	],
	rules: {
		'import/no-extraneous-dependencies': 'off'
	}
};
