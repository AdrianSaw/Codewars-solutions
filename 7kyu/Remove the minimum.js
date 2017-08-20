function removeSmallest(numbers) {
  if(numbers != []) {
    const lowest = numbers.indexOf(Math.min.apply(null,numbers));
    numbers.splice(lowest, 1);
    }
  return numbers;
}