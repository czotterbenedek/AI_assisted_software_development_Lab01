const assert = require('node:assert/strict');
const { calculateLateFee, formatFee, roundLoanToThousands } = require('./src/loan');
assert.equal(calculateLateFee(0), 0);
assert.equal(calculateLateFee(2), 1000);
assert.equal(calculateLateFee(3), 1500);
assert.equal(calculateLateFee(4), 2000);
assert.equal(calculateLateFee(5), 2000);

assert.equal(calculateLateFee(-1), 0);
assert.equal(calculateLateFee(-100), 0);

assert.equal(formatFee(0), '0 HUF');
assert.equal(formatFee(500), '500 HUF');
assert.equal(formatFee(1500), '1500 HUF');

assert.equal(roundLoanToThousands(0), 0);
assert.equal(roundLoanToThousands(499), 0);
assert.equal(roundLoanToThousands(500), 1000);
assert.equal(roundLoanToThousands(1499), 1000);
assert.equal(roundLoanToThousands(1500), 2000);
assert.equal(roundLoanToThousands(2001), 2000);

console.log('All checks passed.');

 // Return a fee label for display.
 