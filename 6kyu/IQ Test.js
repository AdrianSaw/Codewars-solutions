function iqTest(numbers){
  let odd = [], even = [];
  numbers.split(" ").map( (num, i) => num%2 == 0 ? even.push(i + 1) : odd.push(i + 1));
  console.log(odd,even);
  return odd.length > even.length ? parseInt(even) : parseInt(odd);
}