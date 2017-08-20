function min(arr, toReturn) {
  let value = Math.min.apply(null, arr);
  let valueIndex = arr.indexOf(value);
  
  return toReturn === 'value' ? value : valueIndex;
}