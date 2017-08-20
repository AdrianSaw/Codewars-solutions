function openOrSenior(data){
  var members = [];
  data.forEach(function (el, i) { 
    (data[i][0] >= 55 && data[i][1] > 7) ? members.push("Senior"):members.push("Open");
  });
  return members;
}