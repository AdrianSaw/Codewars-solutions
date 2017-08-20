function getSumOfDigits(integer) {
  let sum = null;
  let digits =  Math.floor(integer).toString();
  for(let ix = 0; ix < digits.length; ix++) {
    sum += Number(digits[ix]);
  }
  return sum;
}