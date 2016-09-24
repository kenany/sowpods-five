var sowpodsFive = require('../');
var test = require('tape');

test('exports an array', function(t) {
  t.plan(1);
  t.ok(Array.isArray(sowpodsFive));
});
