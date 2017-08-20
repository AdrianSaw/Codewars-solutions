function declareWinner(fighter1, fighter2, firstAttacker) {

  var first = firstAttacker == fighter1.name ? fighter1 : fighter2;
  var second = firstAttacker == fighter1.name ? fighter2 : fighter1;

  while(first.health >= 0 || second.health >= 0 ) {

    if(first.health > 0) second.health = second.health - first.damagePerAttack 
    else return second.name

    if(second.health > 0) first.health = first.health - second.damagePerAttack;
    else return first.name;

  }
}