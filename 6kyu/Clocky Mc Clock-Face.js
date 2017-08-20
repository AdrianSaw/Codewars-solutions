var whatTimeIsIt = function(angle) {
  let hour = Math.floor((angle / 360 ) * 12);
  let minutes = Math.floor((angle / 360 ) * 12 * 60) % 60;
  hour = hour == 0 ? 12 : hour <10 ? "0" + hour : hour;
  minutes = minutes == 0 ? '00' : minutes <10 ? "0" + minutes : minutes
  return hour + ':' + minutes;
}