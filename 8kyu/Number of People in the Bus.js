var number = function(busStops){
  let sum = 0;
  busStops.map((p)=>  sum+= p[0] - p[1]);
  return sum;
}