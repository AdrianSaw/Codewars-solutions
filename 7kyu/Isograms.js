function isIsogram(str){
  let result = true;
  let x = str.toLowerCase().split('').sort().join('');
  x.split('').sort().map((letter, i) => letter === x[i+1] ? result = false : null); 
  return result;
}