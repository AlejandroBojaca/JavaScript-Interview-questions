// Problem 16
// make use of the concept of promises to determine whether num is even or odd. You need to do the following:
// If num is not a number, reject the promise with the data error that is passed to it.
// If num is odd, resolve the promise after 1 second with the data odd passed to it.
// If num is even, reject the promise after 2 seconds with the data even passed to it.

function evenOdd(num) {
  return new Promise((resolve, reject) => {
    //Checl if the value is a number
    if (!Number.isFinite(num)) reject("error");

    //Check if value is even and then set set timeout function and return even after 2 seconds
    if (num % 2 == 0) {
      setTimeout(function () {
        resolve("even");
      }, 2000);
    } else {
      //Check if value is odd and then set set timeout function and return odd after 2 seconds
      setTimeout(function () {
        resolve("odd");
      }, 1000);
    }
  });
}

function test(number) {
  return evenOdd(number)
    .then(function (result) {
      return console.log(result);
    })
    .catch((err) => console.log(err));
}

//Problem 17 Asynchronous Callbacks
//fix getTodo function so it returns the correct output

const getTodo = (callback) => {
  //The callback function helps notify when an asynchronous block of code is done executing
  setTimeout(() => {
    callback({ text: "Complete Code Example" });
  }, 2000);
};

function display() {
  //todo is an anonymous function which executes after a delay of 2000 milliseconds
  getTodo((todo) => {
    console.log(todo.text);
  });
}
display();

//Problem 18 Print numbers sequentially
// In this challenge, you need to print the numbers 0-9 in a sequential manner, so that
// each number is printed after a waiting time of i*1000

// function that returns a promise with the value of i
const sleep = (i, ms) =>
  new Promise((resolve) => setTimeout(() => resolve(i), ms));
// async function that prints the values of the promises
async function print() {
  for (let i = 0; i < 10; i++) {
    //await retrieves the value fom the promises after freezing the code (Asynchronus), such that every
    //promise gets excecuted in order
    const res = await sleep(i, i * 1000);
    console.log(res);
  }
}
