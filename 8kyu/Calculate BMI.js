function bmi(weight, height) {
console.log(weight,height);
  let index = weight/Math.pow(height,2)
  console.log(index);
  return index > 30 ? "Obese" : index <= 30 && index > 25 ? "Overweight" : index <= 25 && index >= 20 ? "Normal" : "Underweight";
}