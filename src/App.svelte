<script>
	import { name, greeting } from './stores';
</script>

<h1>{$greeting}</h1>
<input bind:value={$name} />

<button
	on:click={() => {
		$name += '!';
		// 以下と上記は同じ意味
		// name.set(($name += '!'));
	}}
>
	Add exclamation mark!
</button>
