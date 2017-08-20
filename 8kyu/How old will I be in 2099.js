function  calculateAge(age, old) {
  console.log(age,old);
  return old - age == 0 ? "You were born this very year!" :
  old - age == 1 ?  "You are 1 year old." : age - old  == 1 ? "You will be born in 1 year." :
  old >= age ? "You are " + (old - age) + " years old." : "You will be born in " + (age - old) + " years.";
}