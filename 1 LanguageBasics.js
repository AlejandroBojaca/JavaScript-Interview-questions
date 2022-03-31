//Challenge balenced parentheses
////checks whether or not the input string’s opening and closing brackets are correctly nested.
//Sample input
// "{ [ ] ( ) }"
// "{ [ ( ] ) }"
// Sample output
// true
// false

function balancedParentheses(str) {
  console.log(str);

  //Divide the parentheses and make and array with each element
  const brackets = str.split("");

  //Used to determine which values in brackets are open brackets
  const openBrakets = ["{", "[", "("];

  const arrayOpenBrakets = [];

  //Used to compare open brackets, if their value corresponds to the
  // close bracket (value in object) then the parenthesis is correct
  const pairs = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let par of brackets) {
    //if the value is an open bracket it is stored in the openBrackets array and the next
    // iteration is called
    if (openBrakets.includes(par)) {
      arrayOpenBrakets.push(par);
      continue;
    }

    //par is equal to an open bracket, this value is then compared to the pairs map
    //if the value doesnt match then there's a wrongly placed parenthesis
    if (par !== pairs[arrayOpenBrakets.pop()]) {
      return false;
    }

    //If the cycle reaches this point it means that the arrayOpenBrackets is empty which means
    //there are no more elements to be evaluated and no incorrect placed brackets
    if (arrayOpenBrakets.length === 0) return true;
  }
}

////Problem 2 Where To insert
// Given an unsorted array of numbers and another number, you are required to find the index at which the
// number would be placed if it were to be inserted in a sorted version of the array of numbers.
//Sample input
//([5,4,1,3],2)
//Sample output
//1

const getIndex = (arr, number) => {
  //We use the spread oerator to create a new array that contains the old array and the new element
  //We then use the sort function to sort and store the new array in sortedArr
  let sortedArr = [...arr, number].sort((a, b) => a - b);

  //We find the index of the new element inserted in the array
  let numberIndex = sortedArr.indexOf(number);

  return numberIndex;
};

//define a function, createPhoneNumber, that accepts an array of 10 integers
//(between 0 and 9). It should return a string of those numbers in the form of a phone number.

function createPhoneNumber(arr) {
  //We use template literals to create a new string which modifies the original array
  //arr.slice helps us to cut the array and save the parts we need
  return `(${arr.slice(0, 3).join("")}) ${arr.slice(3, 6).join("")}-${arr
    .slice(6)
    .join("")}`;
}

//Problem 4
//Given two arrays, you need to insert the elements of the first
//array into the second array at the specified

function sliceSplice(array1, array2, n) {
  //splice function selects and index (n) selects how many elements have to be deleted after that
  //index, and inserts some element(s) in that position (array1)
  //Is a mutable function
  array2.splice(n, 0, ...array1);
  return array2;
}

//Problem 5
//use destructuring to extract and display the name of the second object in the array.

const exampleObject = {
  collection: [{ name: "kelly" }, { name: "Anna" }],
};

function display() {
  //We use object destructuring to get to the second value in the array by doing [,{value}]
  //we specify the value that we want to get in the second object of the array by doing {name}
  const {
    collection: [_, { name }],
  } = exampleObject;
  console.log(name);
}

//Problem 6
//Given an array, you have to remove the first two elements using array destructuring.

function removeFirstTwo(list) {
  //We use destructuring to assign the values inside list, we skip the first two values
  //and create an array (rest) with the other elements using "rest"
  const [, , ...rest] = list;
  return rest;
}

//Problem 7
//You’re given a function returnNthCat, which takes a variable n and has an object state defined in it.

function returnNthCat(n) {
  const state = {
    cats: [
      { catId: 1, name: "tom" },
      { catId: 2, name: "tiggy" },
      { catId: 3, name: "leo" },
      { catId: 4, name: "nixie" },
    ],
    curpage: 3,
  };

  //We use destructuring to create an array that contains all the cats
  const { cats } = state;
  //We estract the name property of the cat in the nth position inside the array
  const { name } = cats[n];

  console.log(name);
  return name;
}

//Problem 8
//when point is undefined the program should not run into an error

function pointValues(point) {
  //By using the spread operator on an undefined value we create an empty object which then
  const { name: n, age: a } = { ...point };
  console.log(n);
  console.log(a);
}

//Problem 9 Validate arguments

const concat = function (string1, string2) {
  if (typeof string2 === "undefined" && typeof string1 === "undefined") {
    throw new TypeError("Both arguments are not defined");
  } else if (typeof string1 !== "string" && typeof string1 !== "undefined") {
    throw new TypeError("not string");
  }

  if (typeof string1 !== "string" && typeof string1 !== "undefined") {
    throw new TypeError("not string");
  } else if (typeof string2 !== "string" && typeof string2 !== "undefined") {
    throw new TypeError("not string");
  } else if (typeof string1 === "undefined") {
    throw new TypeError("First argument is not defined");
  } else if (typeof string2 === "undefined") {
    throw new TypeError("Second argument is not defined");
  } else {
    return string1 + string2;
  }
};
