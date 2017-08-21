function countPositivesSumNegatives(input) {
  let neg = 0, pos = 0;

  if (input === null || input.length < 1) return [];
  input.map((item) => {
    return item > 0 ? pos++ : neg+=item;
  })
  return [pos,neg]  
}