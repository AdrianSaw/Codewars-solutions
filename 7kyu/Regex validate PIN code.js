function validatePIN (pin) {
  return pin.match(/[0-9]/g).length != pin.length ? false : 
  pin.length == 4 || pin.length == 6 ? true : false;
}