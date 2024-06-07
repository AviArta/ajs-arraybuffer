import Character from "./character";

export default class Magician extends Character {
    constructor(name, stone, interval) {
        super(name, "Magician");
        this.attack = 10;
        this.defence = 40;
        this.stone = stone;
        this.interval = interval;
    };

    set attack(value) {
      this.changeAttack = value;
    }

    get attack() {
      let attack = this.changeAttack;

      attack -= this.changeAttack * ((this.interval - 1) / 10);

      if (this.stone) {
          attack -= Math.log2(this.interval) * 5;
      }
      this.attack = attack;
      if (attack < 0) {
        attack = 0;
      }
      return Math.floor(attack);
    }
}
