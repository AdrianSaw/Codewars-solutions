function tripleTrouble(one, two, three){
  let result = '';
  for( let i = 0; i < one.length; i++) {
    result += one.slice(i,i+1) + two.slice(i,i+1) + three.slice(i,i+1);
  }
  return result;
}