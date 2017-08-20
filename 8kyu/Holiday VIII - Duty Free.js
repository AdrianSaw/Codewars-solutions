function dutyFree(normPrice, discount, hol){
  const discountRest = normPrice * discount / 100;
  return Math.floor(hol/discountRest)
}