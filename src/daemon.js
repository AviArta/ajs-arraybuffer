import Character from "./character";

export default class Daemon extends Character {
    constructor(name) {
        super(name, "Daemon");
        this.attack = 10;
        this.defence = 40;
        this.stone = null;
    };
    
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
