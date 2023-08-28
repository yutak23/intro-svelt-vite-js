<script>
	// import { onDestroy } from 'svelte';
	import { count } from './stores';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';

	// let countValue;

	// const unsubscribe = count.subscribe((value) => {
	// 	countValue = value;
	// });

	// コンポーネントが何度もインスタンス化されたり破棄されたりしてもメモリーリークにならないようにサブスクリプションを破棄する
	// が、onDestroyでunsubscribeするのも冗長なので$でstoreを参照すると自動的にunsubscribeされる
	// onDestroy(unsubscribe);
</script>

<!-- <h1>The count is {countValue}</h1> -->
<h1>The count is {$count}</h1>

<Incrementer />
<Decrementer />
<Resetter />
