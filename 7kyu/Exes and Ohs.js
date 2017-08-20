function XO(str) {
let counts = {};
  for (let index = 0; index < str.length; ++index) {
      ch = str.charAt(index).toLowerCase();
      count = counts[ch];
      counts[ch] = count ? count + 1 : 1;
  }
  return (counts.x + counts.o) %2 === 0 || counts === NaN || str === "" ? true : false;
}