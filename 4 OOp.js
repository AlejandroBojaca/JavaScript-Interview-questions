// Problem 19 Prototype property
//make some modification(s) in the code between lines 7 and 11 so that the code compiles successfully

function func1(name) {
  this.name = name;
}

//Instance created of func1, in the previous case this was created before func1.prototyope was modified
const obj1 = new func1("Bran");

//We fix it by defining talk as a property of the prototype instead of replacing it as in the previous
//code
func1.prototype.talk = function () {
  console.log("Welcome " + this.name);
};

//Previous code
// func1.prototype = {
//   talk: function(){
//     console.log ("Welcome " + this.name);
//   }
// }

function display() {
  const obj2 = new func1("Jon");
  obj2.talk();
  obj1.talk();
}

//Problem 20 isPortotypeOf

function isPrototype() {
  const obj1 = { x: 1 };
  //write code here
  //object 2 is created using the object one as template, it inherites its properties and
  //becomes present in the prototype chain of object 1
  const obj2 = Object.create(obj1);
  console.log(obj1.isPrototypeOf(obj2));
}

//Problem 21 ES6 Classes
//Convert from code to ES6 and fix the code

// function Cat (name) {
//   this.name = name
// }
// Cat.mew doesnt point to the Cat prototype so the property doesnt get inherited by instances
// Cat.meow = function () {
//   console.log(this.name + ' says meow')
// }
// let catty = new Cat('catty')

class Cat {
  constructor(name) {
    this.name = name;
  }

  //In ES6 classes methods defined inside the class get inherited as a part of the classe's prototype
  meow() {
    console.log(this.name + " says meow");
  }
}

//New object inherites the method meow
let catty = new Cat("catty");

//Problem 22
//implement inheritance between the class Human and Man.

function Human(name, age) {
  this.name = name;
  this.age = age;
}

function Man(name, age) {
  //Calls the Human object and passes the name and age of Man using the Man's object properties
  Human.call(this, name, age);
}

//The prototype of the Man instances will be the same as the one for Human instances
Man.prototype = Human.prototype;

function check() {
  const obj = new Man("Tommy Tan", 20);
  console.log(obj.name); //should print name
  console.log(obj instanceof Human); //should be true
}

//Problem 23
// there are two classes, Vehicle and Car. You need to implement inheritance
// between them so that Car is the child class and Vehicle is the parent.

//parent class
class Vehicle {
  constructor(fuel) {
    this.fuel = fuel;
  }
  turnOn() {
    console.log("Turned on");
  }
  turnOff() {
    console.log("Turned off");
  }
}

//Child class inherites from vehicle
class Car extends Vehicle {
  constructor(fuel, isparked) {
    //super asigns all the vehicle constructor functions into car
    super(fuel);
    //new variable
    this.isparked = isparked;
  }
  //turnOn gets modified for the car class
  turnOn() {
    if (this.fuel >= 500) {
      //call the original turn on function
      super.turnOn();
    } else {
      //new implementation
      console.log("Refill Fuel");
    }
  }
  turnOff() {
    if (this.isparked == true) {
      super.turnOff();
    } else {
      console.log("Car not parked");
    }
  }
}

//Problem 24 Counting animals
//modify the code so that the code above displays the correct answer

class Animal {
  // Original code
  // constructor() {
  //   this.count = 0;
  // }
  constructor() {}

  //to fix the problem we need to create an static variable count, this variable will be assigned
  //to the class instead of the prototype
  static count = 0;

  //This method will increase the static count
  static increaseCount() {
    this.count += 1;
  }

  static getCount() {
    return this.count;
  }
}

function test() {
  //increase count and getCount are methods only available on the original Animal clas
  Animal.increaseCount();
  console.log(Animal.getCount());
}
