<script>
	let { data } = $props();

	/** @type {HTMLDivElement} */
	let el;

	// A derived that depends on the passed-in data.
	// This creates a dependency chain from bind:this teardown back to the parent's data.
	const display = $derived(data.toUpperCase());
</script>

<div bind:this={el}>{display}</div>
