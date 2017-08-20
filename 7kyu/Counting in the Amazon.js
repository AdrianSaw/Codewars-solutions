function countArara(n) {
  return 'adak '.repeat(parseInt(n / 2)).concat( n % 2 !== 0 ? 'anane' : adak.slice(0, -1))
}