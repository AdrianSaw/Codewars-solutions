function nbYear(p0, percent, aug, p) {
  let time = 0;
  let growth = p0;
  while(growth < p) {
    growth += growth * (percent/100) + aug;
    time++;
  }
  return time;
}