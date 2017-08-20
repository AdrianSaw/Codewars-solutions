function solution(number){
  let result = [0,0,0];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 && i % 5 !== 0) result[0]++;
    if (i % 3 !== 0 && i % 5 === 0) result[1]++;
    if (i % 3 === 0 && i % 5 === 0) result[2]++;
  }
  return result;
}