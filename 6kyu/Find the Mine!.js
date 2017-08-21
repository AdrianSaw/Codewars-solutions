function mineLocation(field){
  let y = 0;
  let x = 0;
  field.map( (item, index) => {
    if(item.indexOf(1) !== -1) {
      x = item.indexOf(1);
      y = index;
    }
  });
  return [y,x]
}