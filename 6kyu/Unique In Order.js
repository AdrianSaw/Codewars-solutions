var uniqueInOrder=function(iterable){

  let result = [];
  
  for(let i = 0; i < iterable.length; i++) {
    iterable[i] !== iterable[i+1] ? result.push(iterable[i]) : null;
  }
  
  return result;
  
}