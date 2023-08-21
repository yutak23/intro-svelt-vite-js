<script>
	import { getRandomNumber } from './utils';

	let promise = getRandomNumber();

	function handleClick() {
		promise = getRandomNumber();
	}
</script>

<button on:click={handleClick}> generate random number </button>

{#await promise}
	<p>...waiting</p>
{:then number}<!-- <- promiseのthne(number)の意味なので、objectなども引数で受け取れるのは同じ -->
	<p>The number is {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
