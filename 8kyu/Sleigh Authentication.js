function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return name + " " + password === 'Santa Claus Ho Ho Ho!';
};