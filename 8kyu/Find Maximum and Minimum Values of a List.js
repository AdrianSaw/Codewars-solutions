var min = function(list){
    let arr = list,
    min = Math.min.apply(Math, arr.map( function(nbr){ return nbr}));
    return min;
}

var max = function(list){
    let arr = list,
    max = Math.max.apply(Math, arr.map( function(nbr){ return nbr}));
    return max;
}