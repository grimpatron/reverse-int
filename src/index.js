module.exports = function reverse (n) {
  let numAbs = Math.abs(n);
  let str = numAbs + "";
  let arr = Array.from(str);
  let arrReverse = arr.reverse();
  let result = "";
  for (let i = 0; i < arrReverse.length; i++) {
    result += arrReverse[i];
  }
  return result * 1;
}
