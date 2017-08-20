function rgb(r, g, b){   
  r > 255 ? r = 255 : r;
  r < 0 ? r = 0 : r;
  
  g > 255 ? g = 255 : g;
  g < 0 ? g = 0 : g;
  
  b > 255 ? b = 255 : b;
  b < 0 ? b = 0 : b;
  
  var rgb = b | (g << 8) | (r << 16);
  return ((0x1000000 + rgb).toString(16).slice(1)).toUpperCase();
  
}