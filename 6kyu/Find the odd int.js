function findOdd(A) {

  let count = {}, result = 0;
  
  A.forEach(function(x) {count[x] = (count[x] || 0)+1;});
  for (var key in count) count[key] % 2 !== 0 ? result = key : null;
  
  return Number(result);
}