var positiveSum = (arr) => {
  var total = arr.reduce(function(sum, value){
    return sum + (value >= 0 ? value : 0 );
  }, 0);
  return total;
}