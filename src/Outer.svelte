<script>
	import Inner from './Inner.svelte';
</script>

<!-- 値を指定しないon:messageイベントディレクティブは、「すべてのメッセージイベントを転送する」ことを意味 -->
<Inner on:message />

<!--
以下の実装でも同じ動作をするが、冗長なので上記のように実装可能
※
<script>
	import Inner from './Inner.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function forward(event) {
		dispatch('message', event.detail);
	}
</script>

<Inner on:message={forward}/>
-->
