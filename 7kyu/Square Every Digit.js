function squareDigits(num){
  return parseInt(num.toString().split("").map(n => Number(n*n)).join(""));  
}