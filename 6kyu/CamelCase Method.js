String.prototype.camelCase=function(){
  return this.split(" ").map( word => word.toString().charAt(0).toUpperCase() + word.slice(1)).join('');
}