function createPhoneNumber(numbers){
  const phoneNumbers = numbers.toString().replace(/,/g, '');
  let result = "(" + phoneNumbers.slice(0,3) + ") " + phoneNumbers.slice(3,6) + "-" + phoneNumbers.slice(6,10);
  return result;
}