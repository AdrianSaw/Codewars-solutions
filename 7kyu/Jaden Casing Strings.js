String.prototype.toJadenCase = function () {
  let result = this.split(" ").map((item) => { 
  return item.replace(item.charAt(0), item.charAt(0).toUpperCase());
  }).join(" ");
  
  return result;
};