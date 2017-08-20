function maxPossibleScore(obj, arr) {
  let result = 0;
  
  arr.map( item => obj[item] ? obj[item] = obj[item] * 2 : null);
  
  for(key in obj) {
    result += obj[key];
  }
  
  return result;
}