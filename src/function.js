class Magdaem {
  constructor() {
    this.level = 1;
    this.health = 100;
    this.attackDist = 0;
    this.dope = false;
    this.distance = 0;
  }

  set attack(distance) {
    this.distance = distance;
  }

  get attack() {
    this.attackDist = this.attackMax - 0.1 * (this.distance - 1) * this.attackMax;
    if (this.dope) {
      this.attackDist = this.attackDist - 5 * Math.log(this.distance) / Math.log(2);
    }
    return this.attackDist;
  }

  set stoned(value) {
    if (value === 'stoned') {
      this.dope = true;
    }
  }
}

export class Magician extends Magdaem {
  constructor() {
    super();
    this.type = Magician;
    this.defence = 25;
    this.attackMax = 100;
  }
}

export class Daemon extends Magdaem {
  constructor() {
    super();
    this.type = Daemon;
    this.defence = 25;
    this.attackMax = 100;
  }
}
