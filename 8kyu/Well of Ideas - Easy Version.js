function well(x){
  let count = 0;
  
  x.map(idea => { if(idea === 'good') count++; });
  
  if(count > 0 && count <= 2) return 'Publish!';
  else if( count > 2) return 'I smell a series!';
  else if( count === 0) return 'Fail!';
  
}