function spinWords(s){
  let result = s.split(" ").map((i)=> {return i.length >= 5 ? i.split("").reverse().join("") : i});
  return result.toString().replace(/,/g, " ");
}