function descendingOrder(n){
    let output = [],
    sNumber = n.toString();

for (var i = 0; i < sNumber.length; i ++) {
    output.push(+sNumber.charAt(i));
}

let result = output.sort((a, b)=>{return b-a});
  return Number(result.toString().replace(/,/g, ""));
}