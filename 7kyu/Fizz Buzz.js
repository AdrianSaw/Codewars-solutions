// Return an array
function fizzbuzz(n)
{
let arr = [];
console.log(n);
    for (let i = 1; i <= n; i ++) {
      i%3 === 0  && i%5 !== 0 ? arr.push("Fizz") : i%5 === 0 && i%3 !== 0 ? arr.push("Buzz") : i%3 === 0 && i%5 === 0 ? arr.push("FizzBuzz") : arr.push(i);
    }
  return arr;
}
var fizzify = fizzbuzz;