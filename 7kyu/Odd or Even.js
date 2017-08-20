function oddOrEven(array) {
  return array.reduce((sum,i) => sum + i, 0)%2 == 0 ? "even" : "odd";
}