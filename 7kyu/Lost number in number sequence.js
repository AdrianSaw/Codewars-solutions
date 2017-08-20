function findDeletedNumber(arr, mixArr) {

  let result = 0;

  for(var i = 0; i < arr.length; i++) {
      if(arr[i] - mixArr.sort((a,b) => a - b)[i] != 0) {
      result = i+1;
      break;
    }
  }
  return result;
}