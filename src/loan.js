const MAX_LATE_FEE = 2000;

function calculateLateFee(daysLate) {
 return Math.min(MAX_LATE_FEE, Math.max(0, daysLate) * 500);
}

/**
 * Formats a non-negative integer amount as a string with " HUF" suffix.
 * @param {number} amount - Non-negative integer fee amount.
 * @returns {string} The formatted fee, e.g. "1500 HUF".
 */
function formatFee(amount) {
 return amount + ' HUF';
}

/**
 * Rounds a loan amount to the nearest thousand.
 * @param {number} amount - The loan amount to round.
 * @returns {number} The amount rounded to the nearest 1000.
 */
function roundLoanToThousands(amount) {
  return Math.round(amount / 1000) * 1000;
}

module.exports = { calculateLateFee, formatFee, roundLoanToThousands };

