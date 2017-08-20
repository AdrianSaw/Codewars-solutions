var isSquare = function(n){
  var r = Math.pow(n,1/2);
  if(n%r === 0 || n === 0 && n >= 0) return true 
  else return false;
}