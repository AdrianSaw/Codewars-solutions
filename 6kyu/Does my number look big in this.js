function narcissistic( value ) {
  let valuePow = value.toString().length;
  let result = value.toString().split('').map((number) => Math.pow(number,valuePow)).reduce((a, b) => a + b, 0)
  return result === value;
}
