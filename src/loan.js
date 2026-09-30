function calculateLateFee(daysLate) {
 return Math.max(0, daysLate) * 500;
}
module.exports = { calculateLateFee };