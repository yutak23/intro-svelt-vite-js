<script>
	import PackageInfo from './PackageInfo.svelte';

	const pkg = {
		name: 'svelte',
		speed: 'blazing',
		version: 4,
		website: 'https://svelte.dev'
	};
</script>

<!-- propsの書き忘れが起きる -->
<!-- <PackageInfo name={pkg.name} speed={pkg.speed} website={pkg.website} />  -->

<!-- スプレッド演算子を使うとpropsの書き忘れを防げる -->
<PackageInfo {...pkg} />
