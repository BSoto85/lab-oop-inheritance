// Create class below
class Tamagotchi {
  constructor(
    name,
    energy = 9,
    full = 8,
    mood = 6,
    sick = false,
    rehomed = false
  ) {
    this.name = name;
    this.energy = energy;
    this.full = full;
    this.mood = mood;
    this.sick = sick;
    this.rehomed = rehomed;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}!`);
  }
  status() {
    console.log(
      `********************\nMy mood is: ${this.mood}\nI am this full: ${
        this.full
      }\nMy energy is: ${this.energy}\nI am ${
        !this.sick ? "not " : ""
      }sick\n********************`
    );
  }
  eat() {
    this.full += 2;
    this.energy -= 1;
    if (this.full > 10) this.sick = true;
  }
  medicate() {
    if (this.sick) {
      this.full = 9;
      this.energy -= 3;
      this.sick = false;
    } else {
      this.energy -= 1;
      console.log(`I am not sick. I do not need medicine.`);
    }
  }
  play() {
    if (this.sick) {
      this.mood -= 1;
      this.energy -= 1;
    } else if (this.mood > 9) {
      this.energy -= 2;
      this.full -= 1;
    } else if (this.energy <= 3) {
      this.energy -= 1;
      console.log(`I am too tired to play`);
    } else {
      this.mood += 2;
      this.full -= 1;
      this.energy -= 1;
    }
  }
  sleep() {
    this.energy += 4;
    this.full -= 3;
  }
  timePasses() {
    if (this.sick) {
      this.mood -= 3;
      this.full -= 2;
      this.energy -= 2;
    } else {
      this.mood -= 2;
      this.full -= 1;
      this.energy -= 1;
    }
  }
  badGuardian() {
    if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
      this.rehomed = true;
      console.log(`${this.name} has been rehomed.`);
    } else {
      console.log(`${this.name} is doing well enough to stay with you.`);
    }
  }
}

const beast = new Tamagotchi("fluffy");
beast.play();
beast.status();

// Do not edit below this line
module.exports = Tamagotchi;
