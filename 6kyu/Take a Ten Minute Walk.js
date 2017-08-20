function isValidWalk(walk) {
  const walkDir = { 'n': 1, 's': -1, 'w': 2, 'e': -2 }
  return walk.map( i => walkDir[i]).reduce((sum,num) => sum + num ) === 0 && walk.length === 10 ? true : false;
}