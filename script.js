'use strict';


const Person = function (firstName, birthYear) {
  (this.firstName = firstName), (this.birthYear = birthYear);

  //!never to this
  //   this.calcAge = function(){
  //     console.log(2037 - this.birthYear);
  //   }
};

const jonas = new Person('Jonas', 1991);
// console.log(jonas);

const kool = new Person('kool', 1991);
// console.log(kool);

const jhon = new Person('jhon', 1991);
// console.log(jonas);

//!instanceof
const jack = 'jack';
// console.log(jonas instanceof Person); //true
// console.log(jack instanceof Person); //false

//!1- New {} is created
//!2- function is called,this ={}
//!3- {} linked to prototyp
//!4- function automatically return {}

//!Prototypes

//?use function

// console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// jonas.calcAge(); //46

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
//!not inhertiance

Person.hey = function () {
  // console.log('Hey there 🤚');
  // console.log(this);
};
Person.hey();

//?isprototypeOf

// console.log('isPrototypeOf', Person.prototype.isPrototypeOf(jonas));
// console.log('isPrototypeOf', Person.prototype.isPrototypeOf(kool));
// console.log('isPrototypeOf', Person.prototype.isPrototypeOf(Person));

//!.prototypeOfLinkedObject
Person.prototype.species = 'home Sqpiens';
// console.log(jonas.species, kool.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

//!Prototype inheritance

// console.log(jonas.__proto__);
//Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
const arr = [3, 4, 6, 4, 5, 6];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__); //object

Array.prototype.unique = function () {
  return [...new Set(this)];
};
// console.log(arr.unique());
const h1 = document.querySelector('h1');

// console.dir(x => x + 1);


//! CLASS

//?class Expression
// const PersonCl = class(){}

//?class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Methods will
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  //?seeter
  set fullName(name) {
    // console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name `);
  }
  //?getter
  get fullName() {
    return this._fullName;
  }
  //?static

  static hey = function () {
    console.log('Hey there 🤚');
    console.log(this);
  };
}

const jessica = new PersonCl('Jessica Davis', 1996);

// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.fullName);

// jessica.greet();

//?1. Classes are Not hoisted
//?2. classes are first-class citizes
//?3. classes are executed in strict mode

// PersonCl.hey();

//!Object.Create

const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const koolfzr = Object.create(PersonProto);

console.log(koolfzr);
koolfzr.name = 'kool';
koolfzr.birthYear = 1989;
koolfzr.calcAge();
console.log(koolfzr);

const sarah = Object.create(PersonProto);

sarah.init('Sarah', 1979);
sarah.calcAge();
console.log(sarah);
//!! Chalenge #1

// The Complete JavaScript Course 27
// Object Oriented Programming (OOP)
// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h
// GOOD LUCK 😀
//?1
const Car = function (make, speed) {
    (this.make = make), (this.speed = speed);
  };
  //?2
  Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
  };
  //?3
  Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
  };
  
  //?4
  
  const A = new Car('BMW', 120);
  
  const B = new Car('Mercedes', 95);
  // A.accelerate();
  // A.brake();
  // A.accelerate();
  // A.brake();
  // A.accelerate();
  // A.brake();
  