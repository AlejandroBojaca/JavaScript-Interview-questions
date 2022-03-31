//Problem 25 Add properties
//turn this into a pure function that returns a new object containing
//the previous and the new properties

//Previous code
// const func = (key, value, object) => {
//   object[key] = value;
// };

const func = (key, value, object) => {
  //We create a new object to dont modify the original object
  let object2 = { ...object };
  object2[key] = value;

  //return a value, for a pure function the output is allways the same for the same input
  return object2;
};

function test() {
  const car = {
    name: "Toyota",
  };

  const answer = func("model", 88, car);
  console.log({ car, answer });
}

//Problem 26 Shallow to deep
//Create a shallow copy of the object

const girl = {
  name: "Anna",
  info: { age: 20, number: 123 },
};

//JSON.stringify converts an object into a JSON string, JSON parse then transforms
//this string back into an object, this creates a new object that is not linked to the original
const newGirl = JSON.parse(JSON.stringify(girl));
newGirl.info.age = 30;

////Problem 27 Shallow to deep
//Create a function maxDonuts that returns the maximum number of whole donuts that can be cooked from a recipe.

const maxDonuts = (recipe, quantity) =>
  //We use object.keys to transverse the complete recipe elemnt, in each step we compare the quatity in
  //the recipe with the quantity that we have, we then return the value for the ingridient with the
  //smallest value and we finally use floor to transforme this value to an int
  Math.floor(
    Math.min(...Object.keys(recipe).map((k) => quantity[k] / recipe[k] || 0))
  );

////Problem 28  Calculate Score
//return the sum of all the values that have BOYS as the gender.
//Sample input
// const records = [
//   {
//       value: 24,
//       gender: "BOYS"
//   },
//   {
//       value: 42,
//       gender: "BOYS"
//   },
//   {
//       value: 85,
//       gender: "GIRLS"
//   },
//   {
//       value: 12,
//       gender: "GIRLS"
//   },
//   {
//       value: 10,
//       gender: "BOYS"
//   }
// ]

function boySum(records) {
  return records.reduce((total, record) => {
    if (record.gender === "BOYS") {
      return total + record.value;
    }
    console.log(record.value, total, record.value + total);
    return total;
  }, 0);
}

////Problem 29 Partial function
//mplement the concept of partial functions.
//The returned function should display the same output as
//the code above when the rest of the words are passed to it.
//input
// test("and", "apple", "mango", "peach")

const sentence = (conjunction, ...otherWords) => {
  const commasJoiningWords = otherWords.slice(0, -1).join(", ");
  const lastWord = otherWords.pop();
  return `${commasJoiningWords} ${conjunction} ${lastWord}`;
};

//This function accepts a function func and the conjunction as parameters only.
//As an output, it returns a function that accepts otherWords as parameters, i.e.,
//all of the remaining words needed to form the sentence.
const partialFnction = (func, conjunction) => {
  return func.bind(null, conjunction);
};

function test(conjunction, ...otherWords) {
  return partialFnction(sentence, conjunction)(...otherWords);
}
