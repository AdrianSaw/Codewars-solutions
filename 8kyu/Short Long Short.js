function solution(a, b){
  return a.length > b.length ? b.concat(a).concat(b) : a.concat(a).concat(b);
}