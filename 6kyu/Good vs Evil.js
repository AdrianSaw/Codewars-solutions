function goodVsEvil(good, evil){

  const goodVal=[1,2,3,3,4,10], evilVal = [1,2,2,2,3,5,10];

  let goodSide = Array.from(good.split(" ")), evilSide = Array.from(evil.split(" ")),
  result1 = [], result2 = [];

  for (var i = 0; i < goodSide.length; i++) result1.push(goodVal[i] * goodSide[i]);
  for (var i = 0; i < evilSide.length; i++) result2.push(evilVal[i] * evilSide[i]);
 
  let x = result1.reduce((a, b) => a + b, 0), y = result2.reduce((a, b) => a + b, 0)
  let winner = x == y ? "Battle Result: No victor on this battle field" : x > y ? "Battle Result: Good triumphs over Evil" : "Battle Result: Evil eradicates all trace of Good";
  
return winner;
}