function add(a) {
  return function number(b){
    return a + b;
  }
}