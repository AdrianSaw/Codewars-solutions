function getMiddle(s)
{
  let middle = [], charLength = s.length;
  charLength % 2 === 0 ? middle.push.apply(middle, [charLength/2,charLength/2 -1]) : middle.push(Math.floor(Number(charLength /2)));
  return middle.length < 2 ? s.charAt(middle[0]) : s.charAt(middle[1])+ s.charAt(middle[0]);
}