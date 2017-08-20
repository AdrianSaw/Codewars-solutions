function elimination(arr){
  let result = null;
  arr.sort().forEach((item,i) => item === arr[i + 1] ? result = item : item); 
  return result;
}