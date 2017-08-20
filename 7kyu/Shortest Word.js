function findShort(s){
var arr = s.split(" ");
var min = Math.min.apply(Math, arr.map(function(str) { return str.length; }));
return min
}