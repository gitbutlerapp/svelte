import { flushSync } from 'svelte';
import { test } from '../../test';

// When an {#if} condition becomes false, {@const} deriveds inside the branch
// should not re-evaluate with stale values. The bind:this teardown in the
// child component triggers a reactive cascade that would re-evaluate the
// {@const} with undefined, causing the compute function to throw.
export default test({
	html: '<button>clear</button><div>HELLO</div>',

	async test({ assert, target }) {
		const [button] = target.querySelectorAll('button');

		flushSync(() => button.click());

		assert.htmlEqual(target.innerHTML, '<button>clear</button>');
	}
});
