const number = [1, 2, 3, 4, 5];
number.forEach((element) => {
  console.log(element);
});

number.forEach((element, index) => {
  console.log("Element an index " + index + ":" + element);
});

// forEach with an Existing Function
function logNumbers(number) {
  console.log(number);
}

number.forEach(logNumbers);

// modyfying array elemnts
number.forEach((number, index, array) => {
  array[index] = number * number;
});

console.log(number);

// skipping or Ignoring Elemnts
let sum = 0;
number.forEach((number) => {
  if (number % 2 === 0) {
    sum += number;
  }
});
console.log(sum);

//Early Termination using return
const numbers = [1, 2, -3, 4, -5];
let firstNegative = null;
numbers.forEach(function (element) {
  if (element < 0) {
    console.log(element);
    firstNegative = element;
    return;
  }
});
console.log(firstNegative);

// accesing the Entire Array
const targetNumber = 4;
let isPresent = false;
numbers.forEach((element) => {
  if (element === targetNumber) isPresent = true;
});

console.log(
  `the number ${targetNumber} is ${
    isPresent ? "" : "not"
  } present in the array.`
);

// handing Asynchronous Operations

const urls = [
  "https://api.example.com/data1",
  "https://api.example.com/data2",
  "https://api.example.com/data3",
];
// function that return a promise
const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    //simulating an asynchronous HTTP request
    setTimeout(() => {
      resolve(`Data fetched from ${url}`);
    }, Math.random() * 1000);
  });
};

const fetchAllData = async () => {
  const results = [];
  await Promise.all(
    urls.map(async (url) => {
      const data = await fetchData(url);
      results.push(data);
    })
  );
  console.log(results);
};

fetchAllData();

//Modifying the Original Array

const squareNumbers = number.map((element) => {
  return element * element;
});
console.log(squareNumbers);

//Simplifying CAllback Functions with Arrow Functions

const doubleNumbers = number.map((number) => number * 2);
console.log(doubleNumbers);

// Chaining Value Processing Operations
const processedNumbers = number.map((num) => num * 2).filter((num) => num > 5);
console.log(processedNumbers);

//Transforming Array in Objects
const users = [
  { name: "John", age: 18 },
  { name: "Sarah", age: 26 },
  { name: "Mike", age: 25 },
];

const names = users.map((user) => user.name);
console.log(names);
console.log(names.join(","));

//
var a = 5,
  b = 6;

max();
function max() {
  console.log(a > b ? a : b);
}

// Mapping and Filtering
console.log("<---Mapping and Filtering--->");
const numberMappingFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numberMappingFilter
  .map((number) => number * 2)
  .filter((number) => number % 3 !== 0);

console.log(result);

//Mapping and reducing
console.log("<---Mapping and reducing--->");

const expenses = [
  { description: "Rent", amount: 300 },
  { description: "Groceries", amount: 200 },
  { description: "Utilities", amount: 350 },
  { description: "Entertaiment", amount: 250 },
];

const totalExpense = expenses
  .map((expense) => expense.amount)
  .reduce((total, amount) => total + amount, 0);

console.log(totalExpense);

//Modifying Object Properties
console.log("<---Modifying Object Properties--->");

const usersModified = [
  { id: 1, name: "Daniel" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
];

const modifiedUsers = usersModified.map((user) => ({
  ...user,
  name: user.name + "Smith",
}));

console.log(modifiedUsers);

// Parsing  and Formatting Data
const books = [
  { id: 1, title: "The Good parts", author: "Douglas Crockford" },
  { id: 2, title: "Eloquent JS", author: "MArijin Haverbeke" },
  { id: 3, title: "You dont know js", author: "Kyle Simpson" },
];

const booksTitles = books.map((book, index) => book.title + " " + index);
console.log(booksTitles);

// Plucking Multiple Values
const usersPlucking = [
  { id: 1, title: "The Good parts", author: "Douglas Crockford" },
  { id: 2, title: "Eloquent JS", author: "MArijin Haverbeke" },
  { id: 3, title: "You dont know js", author: "Kyle Simpson" },
];

const userInformation = usersPlucking.map((user) => ({
  name: user.name,
  age: user.age,
}));

console.log(userInformation);

// Transforming plucking Values

console.log("Transforming plucking Values");
const celsiusTemperatures = [20, 25, 30, 35, 40];
const fahrenheitTemperatures = celsiusTemperatures.map(
  (celsius) => (celsius * 9) / 5 + 32
);
console.log(fahrenheitTemperatures);

console.log("introductio to calculating Values with Map");
const squareNumbers1 = number.map((element) => {
  return element * element;
});
console.log(squareNumbers);

// applying Complex Calculations
console.log("Transforming plucking Values");
const celsiusTemperatures1 = [20, 25, 30, 35, 40];
const kelvinTemperatures = celsiusTemperatures1.map(
  (celsius) => celsius + 273.15
);
console.log(kelvinTemperatures);

// pluck function
console.log(" pluck function");
const pluck = (arr, key) => arr.map((i) => i[key]);
const usersPlucking1 = [
  { id: 1, title: "The Good parts", author: "Douglas Crockford" },
  { id: 2, title: "Eloquent JS", author: "MArijin Haverbeke" },
  { id: 3, title: "You dont know js", author: "Kyle Simpson" },
];

let nameTitlePlucking = pluck(usersPlucking1, "title");
console.log(nameTitlePlucking);

//Customization and Flexibility

const usersEdad = [
  { name: "John", age: 18 },
  { name: "Sarah", age: 26 },
  { name: "Mike", age: 25 },
];

const adults = users.filter((user) => user.age >= 18);
