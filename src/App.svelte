<script>
	import tippy from 'tippy.js';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/material.css';

	let content = 'Hello!';

	function tooltip(node, options) {
		// eslint-disable-next-line no-shadow
		const tooltip = tippy(node, options);

		return {
			// eslint-disable-next-line no-shadow
			update(options) {
				tooltip.setProps(options);
			},
			destroy() {
				tooltip.destroy();
			}
		};
	}
</script>

<input bind:value={content} />

<button use:tooltip={{ content, theme: 'material' }}> Hover me </button>
