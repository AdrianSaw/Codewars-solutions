function scoreThrows(radiuses){
  let result = 0;
  let perfectThrowsNumber = 0;
  radiuses.map(dart => {
    if(dart <= 10 && dart >= 5) result+= 5;
    else if(dart < 5) {
      result += 10;
      perfectThrowsNumber++;
    }
  });
  return radiuses.length === perfectThrowsNumber && radiuses.length !== 0 ? result + 100 : result;
}