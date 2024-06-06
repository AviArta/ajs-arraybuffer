import Character from "./character";

export default class Magician extends Character {
    constructor(name) {
        super(name, "Magician");
        this.attack = 10;
        this.defence = 40;
        this.stone = null;
    }

    set attack(param) {
        
    }
  
    get attack() {
        return this.attack;
    }

    set stoned(param) {
        
    }
  
    get stoned() {
        return this.stone;
    }
}
