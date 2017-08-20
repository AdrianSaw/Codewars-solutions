function pigIt(str){

  let result = [];
  
  str.split(" ").forEach(function(i){
    result.push(i.substr(1) + i.substr(0,1).concat("ay"));
  });

  return result.toString().replace(/,/g, " ")
}