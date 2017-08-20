function averageString(str) {

  let average = 0;

  let numbers = {"zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5,
    "six": 6, "seven": 7, "eight": 8, "nine": 9 }
    
  let sum = str.split(" ").map( i=> numbers[i]).reduce((sum, num)=> sum += num) / str.split(" ").length;

  Object.keys(numbers).forEach(function(key) {
    if(numbers[key] == Math.floor(sum)) average = key;
  });

  return average != 0 ? average : 'n/a';
  
}