const test = require('ava');

const { default: a } = require('../dist/index');

/**
 * @param {number} timeout
 */
function sleep(timeout) {
	return new Promise((resolve) => {
		setTimeout(resolve, timeout);
	});
}

test('fd-an000128', async (t) => {
	const r1 = await a();
	t.log(r1);
	t.is(r1.length > 0, true);
	await sleep(1000);
	const r2 = await a();
	t.log(r2);
	t.is(r1, r2);
});
