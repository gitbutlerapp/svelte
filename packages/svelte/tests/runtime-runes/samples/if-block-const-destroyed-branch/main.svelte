<script>
	import Child from './Child.svelte';

	let value = $state('hello');

	function compute(v) {
		return v.toUpperCase();
	}
</script>

<button onclick={() => { value = undefined; }}>clear</button>

{#if value}
	{@const result = compute(value)}
	<Child data={result} />
{/if}
