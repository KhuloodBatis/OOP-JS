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

// //?class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   //Methods will
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
//   //?seeter
//   set fullName(name) {
//     // console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name `);
//   }
//   //?getter
//   get fullName() {
//     return this._fullName;
//   }
//   //?static

//   static hey = function () {
//     console.log('Hey there 🤚');
//     console.log(this);
//   };
// }

// const jessica = new PersonCl('Jessica Davis', 1996);

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

// console.log(koolfzr);
koolfzr.name = 'kool';
koolfzr.birthYear = 1989;
// koolfzr.calcAge();
// console.log(koolfzr);

const sarah = Object.create(PersonProto);

sarah.init('Sarah', 1979);
// sarah.calcAge();
// console.log(sarah);
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
// const Car = function (make, speed) {
//     (this.make = make), (this.speed = speed);
//   };
//   //?2
//   Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`'${this.make}' going at ${this.speed} km/h`);
//   };
//   //?3
//   Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(`'${this.make}' going at ${this.speed} km/h`);
//   };

//?4

//   const A = new Car('BMW', 120);

//   const B = new Car('Mercedes', 95);
// A.accelerate();
// A.brake();
// A.accelerate();
// A.brake();
// A.accelerate();
// A.brake();
//! Challenge #2
//   The Complete JavaScript Course 28
// Coding Challenge #2
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h
// GOOD LUCK 😀

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  //?2
  accelerate() {
    this.speed += 10;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
    return this;
  }
  //?3
  brake() {
    this.speed -= 5;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
    return this;
  }
  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
    return this;
  }
}

const ford = new CarCl('Ford', 120);

// console.log(ford.speedUs);

// ford.accelerate();
// ford.accelerate();
// ford.brake();

ford.speedUS = 50;
// console.log(ford);

//! inheritance bet Class : construse

const PersonG = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

PersonG.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  PersonG.call(this, firstName, birthYear);
  this.course = course;
};

//Linking prototypes
Student.prototype = Object.create(PersonG.prototype);

Student.prototype.intrduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Scince');

// mike.intrduce();
// mike.calcAge();

// console.log(mike instanceof Student);
// console.log(mike instanceof PersonG);
// console.log(mike instanceof Object);

Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// The Complete JavaScript Course 28
// Coding Challenge #2
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h
// GOOD LUCK 😀
// Coding Challenge #3
// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism 😉
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
// GOOD LUCK 😀

const Car = function (make, speed) {
  (this.make = make), (this.speed = speed);
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`'${this.make}' going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`'${this.make}' going at ${this.speed} km/h`);
};

const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

Ev.prototype = Object.create(Car.prototype);

Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
const test = new Ev('Teas', 120, 23);

Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;

  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of of ${this.charge}`
  );
};
// test.chargeBattery(90);
// console.log(test);
// test.brake();
// test.accelerate();
//!

//?class declaration
class PersonCl2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Methods will
  calcAge() {
    console.log(
      `I'm ${
        2022 - this.birthYear
      } years old, but as student I  feel more like ${
        2022 - this.birthYear + 10
      }`
    );
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

  intrduce() {
    console.log(`My name is ${this.fullName} and  I study ${this.course}`);
  }
}

class Student2 extends PersonCl2 {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
}

const martha = new Student2('Martha jonas', 2012, 'IT');
// martha.intrduce();
// martha.calcAge();

///! anothe example classes
//? Public fields
//? Private fields
//?Public methods
//?Private methods
class Account {
  local = navigator.language;
  #movements = [];
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    //protected
    // this.#movements = [];
    // this.locale = navigator.language;

    // console.log(`Thanks for opening an account,${owner}`);
  }
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  _approveLoan(val) {
    return true;
  }

  requestLone(val) {
    if (this._approveLoan(val));
    // console.log(`Loan approved`);
    return this;
  }
}

const acc1 = new Account('jonas', 'ER', 1111);
// console.log(acc1);

// acc1._movements.push(255);
// acc1._movements.push(-145);

// acc1.deposit(209);
// acc1.withdraw(140);
// acc1._approveLoan(1000);
// acc1.requestLone(1000);
// console.log(acc1.getMovements());

// console.log(acc1);

// console.log(acc1.#movements);
//!chaining Methods

acc1.deposit(300).deposit(500).withdraw(35).requestLone(25000).withdraw(4000);

// console.log(acc1.getMovements());

//!challenge

// The Complete JavaScript Course 29
// Coding Challenge #4
// Your tasks:
// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// child class of the 'CarCl' class
// 2. Make the 'charge' property private
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl'
// class. Then experiment with chaining!
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
// GOOD LUCK
class CarCl2 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  //?2
  accelerate() {
    this.speed += 10;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
  }
  //?3
  brake() {
    this.speed -= 5;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
    return this;
  }
  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

// const car = new CarCl2('kool', 120, 23);
// console.log(car.speedUs);

///??????????????????????????
class EvL extends CarCl2 {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;

    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EvL('Rivian', 120, 23);
console.log(rivian);

rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUs);