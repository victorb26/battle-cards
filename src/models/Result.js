export class ResultModel  {
   
  
    constructor(winner, loser, pokemon, hp, attack, defense, specialAttack, specialDefense, speed) {
      this.playerWinner = winner;
      this.playerLoser = loser;
      this.pokemon = pokemon;
      this.hp = hp;
      this.attack = attack;
      this.defense = defense;
      this.specialAttack = specialAttack;
      this.specialDefense = specialDefense;
      this.speed = speed;
    }
  }