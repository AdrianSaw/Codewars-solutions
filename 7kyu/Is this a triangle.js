let isTriangle = (a, b, c) => {
  let max = Math.max(a, b, c), sum = a + b + c;
  return sum - max > max;
}