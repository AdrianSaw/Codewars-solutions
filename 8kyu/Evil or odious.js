function evil(n) {
  const bin = (n >>> 0).toString(2);
  let count = 0;
  for ( let i = 0; i < bin.length; i++) {
    if(bin[i] === '1') count++;
  }
  return count % 2 === 0 ? "It's Evil!" : "It's Odious!";
}