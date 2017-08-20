var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = count => {
    let i = 0, result = "", sum = 0;
    if(count > 0 ) {
      while(i <= count){
        result+=i +"+";
        sum+=i;
        i++;
      }
      return result.slice(0,-1).concat(" = " + sum)
    } 
    
   return  count < 0 ? count + "<0" : count + "=0"; 

  };

  return SequenceSum;

})();