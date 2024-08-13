module.exports = function reverse (n) {
  const absNumber = Math.abs(n);
  const arr = absNumber.toString();
  return +arr.split('').reverse().join('');
}