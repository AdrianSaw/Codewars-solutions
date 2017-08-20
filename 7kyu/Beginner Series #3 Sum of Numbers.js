function GetSum( a,b ){
  let sum = 0, min = a > b ? b : a, max = a > b ? a : b;
  for (let i = min; i <= max; i++) sum += i;
    return sum;
}