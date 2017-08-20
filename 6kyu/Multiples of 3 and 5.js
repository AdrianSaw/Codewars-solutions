function solution(number){
  var sum = 0;
  for(var i = 1; i < number; i++) i%3 === 0 ? sum += i : i%5 === 0 ? sum += i : null;
  return sum;
}