function filter_list(l) {
  return l.filter(i => typeof i !== "string" && i !== 0 ? i : i === 0 ? "0" : null); 
}