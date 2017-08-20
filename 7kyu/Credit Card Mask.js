// return masked string
function maskify(cc) {
  let last = cc.toString().slice(cc.length -4, cc.length);
  let result = cc.replace(/./g, '#').slice(0, cc.length-4).concat(last)
  return cc.length > 4 ? result : cc;
}