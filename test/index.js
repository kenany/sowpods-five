const test = require('tape');

const sowpodsFive = require('../');

test('exports an array', (t) => {
  t.plan(1);
  t.ok(Array.isArray(sowpodsFive));
});
