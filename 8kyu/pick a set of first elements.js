function first(arr, n) {
  let length = n >= 0 ? n : 1;
  let result = [];
  for ( let i = 0; i < arr.length; i++) {
    if(i < length) result.push(arr[i]);
  }
  return result;
}