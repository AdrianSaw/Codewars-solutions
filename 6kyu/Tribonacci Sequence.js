function tribonacci(signature,n){
  
  let result = []
  
  if(n == 0) return result;
  
  if(n <= 3) signature.map((item,indeks) => indeks < n ? result.push(item) : null );
  
  if(n > 3){
    result = signature;

    for(let i = 2; i <n-1; i++){
      result.push(result[i-2] + result[i-1] + result[i])
    }
  }
  return result;
  
}