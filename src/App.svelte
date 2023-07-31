<script>
	const string = `this string contains some <strong>HTML!!!</strong>`;
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
<p>{@html string}</p>
