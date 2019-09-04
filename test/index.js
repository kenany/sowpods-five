var test = require('tape');

var sowpodsFive = require('../');

test('exports an array', function(t) {
  t.plan(1);
  t.ok(Array.isArray(sowpodsFive));
});
