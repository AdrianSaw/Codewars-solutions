function findNextSquare(sq) {
  const square = Math.pow((Math.sqrt(sq) + 1),2);
  return Number.isInteger(square) ? square : -1;
}