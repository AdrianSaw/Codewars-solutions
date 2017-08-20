var countBits = function(n) {

var x = (n >>> 0).toString(2);
var count = (x.match(/1/g) || []).length;
return count;
};