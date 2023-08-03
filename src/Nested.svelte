<script>
	// Unexpected token
	//
	// If you expect this syntax to work, here are some suggestions:
	// If you use typescript with `svelte-preprocess`, did you add `lang="ts"` to your `script` tag?
	// Did you setup a `svelte.config.js`?
	// See https://github.com/sveltejs/language-tools/tree/master/docs#using-with-preprocessors for more info.svelte(parse-error)

	// 上記のエラーになるので`let`にする必要がある
	export let answer;
</script>

<p>The answer is {answer}</p>
