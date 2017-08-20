var Ball = function(ballType) {
  
  class Ball {
    constructor(ballType){
      this.ballType = ballType ? ballType : "regular"
    }
  }
  
  let result = new Ball(ballType);
  return result;
};