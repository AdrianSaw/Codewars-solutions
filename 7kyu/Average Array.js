function avgArray(arr) {
  let result = [];
  let sum = 0;
  for(let i = 0; i < arr[0].length; i++){
    for(let j = 0; j <arr.length; j++){
      sum += arr[j][i]
    }
    result.push(sum/arr.length);
    sum = 0;
  }
  return result;
}