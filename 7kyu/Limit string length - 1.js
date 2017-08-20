function solution(string,limit){
  let result = string.substring(0, limit);
  return string.length > limit ? result.concat('...') : result;
}