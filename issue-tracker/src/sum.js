const sum = numbers => {
  if (!numbers.every(Number.isFinite)) {
    throw new TypeError("sum() expects only numbers.");
  }

  return numbers.reduce((a, b) => {
    return a + b;
  }, 0);
};

module.exports = sum;
