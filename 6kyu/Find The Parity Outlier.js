function findOutlier(integers){
  let even = [], odd = [];
  integers.filter( a => a % 2 === 0  ? even.push(a) : odd.push(a))
  return even.length === 1 ? Number(even) : Number(odd);
}