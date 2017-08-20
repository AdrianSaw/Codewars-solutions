// return the missing number!
function findNumber(array) {
  let result = [];
  
  array.sort((a,b) => a - b).map((item, i) => {
    if( array.indexOf(i+1) === -1 ) result.push(i+1);
  });
  
  return result;
}