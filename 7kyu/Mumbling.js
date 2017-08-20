function accum(s) {
  let arr = s.split(""),
  result = "";
  for(let i = 0; i < arr.length; i++) result += arr[i].repeat(i+1) + "-";
  
  result = result.toLowerCase().split("-").map(function(x){ return x.replace(x.charAt(0),x.charAt(0).toUpperCase()) });

  return result.join("-").slice(0, -1)
}