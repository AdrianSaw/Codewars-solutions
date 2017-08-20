function towerBuilder(nFloors) {

  var finalArray = [];
  var numSpaces = 0;
  for (i = nFloors; i > 0; i--) {
  
    finalArray.push(" ".repeat(numSpaces) + "*".repeat(i) + "*".repeat(i-1)  + " ".repeat(numSpaces));
    numSpaces++;
    
  }
  return finalArray.reverse();
  
}