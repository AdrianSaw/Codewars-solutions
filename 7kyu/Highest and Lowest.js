function highAndLow(numbers){
  let arr = numbers.split(" "),
  highest = Number(arr[0]), 
  lowest = Number(arr[0]);
  for(let i = 0; i < arr.length; i ++) {
    highest = highest > Number(arr[i]) ? highest : Number(arr[i])
    lowest = lowest < Number(arr[i]) ? lowest : Number(arr[i])
  }
  return highest.toString() + " " + lowest.toString();
}