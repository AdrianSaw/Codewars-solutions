function reverseNumber(n) {
  let numbersString = n.toString();
  if(numbersString.charAt(0) === '-') {
    return parseInt(
    numbersString.substring(0,1) + numbersString.slice(1).split('').reverse().join('')
    );
  }
  else {
    return parseInt(
    numbersString.split('').reverse().join('')
    );
  }
}