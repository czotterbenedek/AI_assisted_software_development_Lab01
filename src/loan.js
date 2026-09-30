const MAX_LATE_FEE = 2000;

function calculateLateFee(daysLate) {
 return Math.min(MAX_LATE_FEE, Math.max(0, daysLate) * 500);
}
module.exports = { calculateLateFee };