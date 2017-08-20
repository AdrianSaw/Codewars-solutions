function numberToPower(number, power){
  let sum = 1;
  for (let i = 0; i < power; i++){
    sum*= number;
  }
  return sum;
}