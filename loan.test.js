const assert = require('node:assert/strict');
const { calculateLateFee } = require('./src/loan');
assert.equal(calculateLateFee(0), 0);
assert.equal(calculateLateFee(2), 1000);

assert.equal(calculateLateFee(-1), 0);

console.log('All checks passed.');