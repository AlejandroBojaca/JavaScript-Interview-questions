//Problem 10 implement a function check which tests the student’s code for the correct implementation of
//heritance between classes. This function should display Inheritance not implemented
//if the student didn’t implement inheritance and Good job otherwise.

//first class
class Vehicle {
  constructor() {
    const speed = "100";
    const model = "Tesla";
  }
}

// Class that should inherit from Vehicle
class Car {
  constructor() {
    const speed = "100";
    const model = "Tesla";
  }
}

//Creation of new instance of car (not inherit from vehicle)
const car = new Car();

function check() {
  // use instanceof to check if vehicle inherits from vehicle
  if (Car instanceof Vehicle) {
    console.log("Good job");
    return;
  }
  console.log("Inheritance not implemented");
}

//Problem 12 Instance of Array
//make function an instance of Array

function check() {
  const tempFunc = function () {};
  //By giving tempFunc's prototype the prototype of Array we can make tempFunc an instance of Array
  tempFunc.prototype = Array.prototype;
  return new tempFunc() instanceof Array;
}

//Problem 13 Check instance of variables
const tempFunc1 = function () {
  //if this function returns a value tempFunc1 will not be a constructor function
  return {};
};

function check() {
  const object1 = new tempFunc1();
  const object2 = tempFunc1();
  //this should return true
  return object1 instanceof tempFunc1 === object2 instanceof tempFunc1;
}

//Problem 14 Check if element is an array

function check(obj) {
  // const checker = obj.__proto__ === Array.prototype ? true : false;
  const checker = Array.isArray(obj) ? true : false;
  return checker;
}

const isValidDate = (dateString) => {
  const date = new Date(dateString);
  // const typeDate = Object.prototype.toString.call(date);

  const validator = Number.isFinite(date.getTime()) ? true : false;

  return validator;
};

//Problem 15 Check array
//Check if obj is an array

function check(obj) {
  //Object.prototype.toString.call check the type of any element in js and gives us more specific
  //information about the variable type, we can use it to verify type of array
  if (Object.prototype.toString.call(obj) === "[object Array]") {
    return true;
  } else {
    return false;
  }
}
