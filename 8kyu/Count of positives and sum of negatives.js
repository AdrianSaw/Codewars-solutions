function countPositivesSumNegatives(input) {
    let positive = 0, negative = 0, sum=[0,0];

    if (input === null || input.length < 1) {
        return [];
    }
    
      for (let i = 0; i < input.length; i++) {
        input[i] === 0 ? null : input[i] > 0 ? positive++ : negative +=input[i];
      }
      
      sum = [positive,negative];
      return sum;
}