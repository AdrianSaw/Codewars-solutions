var moveZeros = function (arr) {
  let zero = [];
  arr.map( i => i !== 0 ? i : zero.push(i));
  let result = arr.filter( i => i!== 0);
  return result.concat(zero)
}