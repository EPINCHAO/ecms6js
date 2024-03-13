# React + Vite

## npm install

npm install eslint-plugin-functional --save-dev

## run eslint en src

npx eslint src

## Block-scoped declaration

let count=10;
count=20;
console.log(count); // Ouput: 20
const PI= 3.14159;
console.log(PI); // Ouput: 3.14159

## Arrow Function

introoduced concise syntax for writing functions, making them more expressive and readable. They do not bind their own this value.
Foreach (number)=>{...} this syntax is particulary useful when thecallback function is short and Straightforward. It reduces the amount of boilerplate code and enhances code readability.

// traditional function
function multiply(a,b){
return a*b;
}
// Arrow Function
const multiply =(a,b)=> a*b;
console.log(multiply(2,3)); // Ouput: 6

## Template Strings

Allow for embedded expressions and multiple strings without the need for string. Placeholder expressions are denoted by ${} and can contain variables, expressions, or functions calls.

const namePeople = "Jhon";
const agePeople = 25;
console.log(`My name is ${namePeople}
 and I'm ${agePeople} years old.`);
// Ouput:My name is Jhon and I'm 25 years old.

## Destructuring

Allowsyou to extract values from arrays or objects and assign them to variables using a concise syntax. Ut provides a convenient way to acces and work with nested data structures, reducing the need for repetitive
property or index access.

// Destructuring
// Destructuring an array
const number = [1, 2, 3];
const [first, second, ...rest] = number;
console.log(first); //Ouput:1
console.log(second); //Ouput:2
console.log(rest); //Ouput:3
// Destructuring an Object
const person = { nameFirst: "Alice", age: 30 };
const { nameFirst, age } = person;
console.log(nameFirst); // Ouput: Alicia
console.log(age); // Output: 30

## Classes

ES6 introduced class syntax to JS, making it easier to create objects and work with OOP concepts. Provide a morefamiliar and structured approach for creating objects, definning constructors, and adding methods.

class Person{
constructor(name){
this.name= name;
}
sayHello(){
console.log(`Hello, my name is ${this.name}`);
}
}

const personClass = new Person('Alice');
personClass.sayHello();
// Output:Hello, my name is Alice

## Matters in Modern Web development

Es6 features to enable more eficient and maintainable code. ES6 equips you with the tools and knowledge to write cleaner, more concise code, trackle complex problems.Es6 empowers tou buid robust and scalable web APP.

# forEach Helper

## Array Helpers Methods.

the easiest way to write Better Code.
Array helper Methods , are designed to simplify common array operation and make you code mre readable and maintainable.

You can perfor tasks like iterating over array elements, transforming arrays, filtering values, and more.

## Foreach helper

It allows you to iterate over each element of an array and perform a specific operation on each item.

The importance of understanding that forEach does not return a new array.

forEach enhances the code's readability and reduces the chance of introducing bugs.

array.forEach(callbackFunction);

the callbackFunction is onvoked for each element in the array and receives three arguments:

- The Current element,
- The index of the current element
- the array itself.

## Accesing Index and Array in the Callback

not only the current element to the callback function but also the index of the element. You can access these additional parameters to perform more complex doperations.

## Using forEach with an Existing Function

You can also pass an existing function as an argumentto foreach.
Using existing functiones with forEach allows you to separate concerns and improve code reusability. It's a great way to keep your codebase clean and modular.

// forEach with an Existing Function
function logNumbers(number) {
console.log(number);
}

number.forEach(logNumbers);

## Returning a New Array

One important thing to note is that the forEach method does not return a new array. It's primarly used for its side effects, such as logging, updating values, or performing other operations on the existing array elements. If you need to transform an array or create a new array, you should consider other array Hellper Methods like map or filter.

# forEach Helper

## modifying Array Elements with forEach

Is modifying array ELement.

// modyfying array elemnts
number.forEach((number, index, array) => {
array[index] = number \* number;
});

console.log(number);

## Skipping or Ignoring Elements

In some cases, you may want to skip or ignore certain elements while iterate over an array.

// skipping or Ignoring Elemnts
let sum =0;
number.forEach((number) => {
if (number%2===0) {
sum+= number;
}
});
console.log(sum);

## Early Termination using return.

You may need to terminate the ForEach loop prematurely based on certain condition.

//Early Termination using return
const numbers = [1, 2, -3, 4, -5];
let firstNegative = null;
numbers.forEach((element) => {
if ((number, 0)) {
firstNegative = number;
return;
}
});
console.log(firstNegative);

## Additional Functionalities

## Accessing the Entire Array

let's now leverage the third argument - the array itself.
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

## Handling Asynchronous Operations

ForEach is traditionalle used for synchronous operations, Where each iteration occurs immediately after the previous one.

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
}, Math.random() \* 1000);
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

## Modifying the Original Array

However, what if we want to modify theoriginal array itself as updating or remove elements?
To modify the original array, we can use other array helpers like map, filter, or reduce.

these helpers return a new array with desired modificationsbased on the original array,rather mutating the original array directly.

It is generrally recommended to avoid mutating the original array while iterating over it, as it can lead to unexpected results and potential bugs.

## Why Use Foreach?

- Understanding the purpose of ForEach
- Iterating with Ckarity and Simplicity
- Simplifying Callback Functions
- Leveraging the Array Scope.

# Moving Away from For Loops.

## the limitations of forLoops

Create a new array, desde otro. This canmake the code less readable and increase the likelihood of introducing bugs.

## Introducing the forEach Helper.

## Callback Functions and Arrow Functions

# Processing Values

is a crucial aspect of working with arrays as it allows us to transform elements, filtering based on certain conditions, or perform calculations aggregate values on the elements.

## Transforming VAlues witn the map Helper

common operations when processing values is transforming the elements of an array.

//Modifying the Original Array

const squareNumbers = number.map((element) => {
return element \* element;
});
console.log(squareNumbers);

## Simplifying CAllback Functions with Arrow Functions

Arrow functions provide a shortes syntax and a more implicit style, especially for simple transformation.

const doubleNumbers = number.map((number) => number \* 2);
console.log(doubleNumbers);

## Chaining Value Processing Operations

methods is that they can be chained together to perform multiple operations in a single line of code. This chaining allowus to apply different value processing methos sequentially.

The ability to process values efficiently is crucial for manipulating data in web development.

# the Map Helper

## introduction to the map helper

the map helper is an array method introduced in ES5 that allows us to create a new array by transformatting each elcement of an existing array.

basic sintax of the map helper:

array.map(callback (element, index, array)){
// Transformation Logic
});

- element represent el current element.
- index represent index.
- array is the original array being mapped;

## Transforming Array Elements

## Simplifying CAllback Functions with ArrowFunctions

## Transforming Array in Objects.

It can also be used to transform arrays of objects. Example where we have an array of user objects, and we want to extract an array of their names.

//Transforming Array in Objects
const users = [
{ name: "John", age: 18 },
{ name: "Sarah", age: 26 },
{ name: "Mike", age: 25 },
];

const names = users.map((user) => user.name);
console.log(names);
console.log(names.join(","));

## Combining Map wit other Helper Methods

### Mapping and Filtering

Sometimes, we need to transform an array and filter out specific elements simultaneously. example

console.log("<---Mapping and Filtering--->");
const numberMappingFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numberMappingFilter
.map((number) => number \* 2)
.filter((number) => number % 3 !== 0);

console.log(result);

### Mapping and reducing

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

### Modifying Object Properties

The map helper can also be used to modify properties of objects within an array.

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

### Parsing and Formatting Data

The map helper is often used to parse and format data in a desire way.

const books = [
{ id: 1, title: "The Good parts", author: "Douglas Crockford" },
{ id: 2, title: "Eloquent JS", author: "MArijin Haverbeke" },
{ id: 3, title: "You dont know js", author: "Kyle Simpson" },
];

const booksTitles = books.map((book, index) => book.title + " " + index);
console.log(booksTitles);

### Plucking Multiple Values

Pluckling values is not limited to a single property or element; it can also be used to extract multiplevalues simultaneously.

const usersPlucking = [
{ id: 1, title: "The Good parts", author: "Douglas Crockford" },
{ id: 2, title: "Eloquent JS", author: "MArijin Haverbeke" },
{ id: 3, title: "You dont know js", author: "Kyle Simpson" },
];

const userInformation = user.map((user) => ({
name: user.name,
age: user.age,
}));

console.log(userInformation);

### Transforming plucking Values

pv not only alloows us to extract specific properties or elements but also provides the flexibility to trasform those valuesaccording to our requirements.

console.log("Transforming plucking Values");
const celsiusTemperatures = [20, 25, 30, 35, 40];
const fahrenheitTemperatures = celsiusTemperatures.map(
(celsius) => (celsius \* 9) / 5 + 32
);
console.log(fahrenheitTemperatures);

Plucking values using the map helper is a powerful techniques that allows us to manipulate an d work with data more effectively in web development projects.

## Calculating Values with Map

### introductio to calculating Values with Map

Map helper is commonly used to iterate over an array and create a new array with modified or transformed values. While plucking values allows us to extract specific properties or elements.

### Applying Complex Calculations

console.log("Transforming plucking Values");
const celsiusTemperatures1 = [20, 25, 30, 35, 40];
const kelvinTemperatures = celsiusTemperatures1.map(
(celsius) => celsius + 273.15
);
console.log(kelvinTemperatures);

We explored the concept of calculating values with the map helper. While te map helper is commonly used for plucking values.

## Implementing 'Pluck'

The 'pluck' function allow sus to extract a specific property from each object in an array and create a new array containing only extracted values.

### Introduction to 'Pluck'

The 'pluck' function is a handy utility that enables us to retrieve a particular property value from each object in an array and create a new array only extracted values.

fuction pluck(array, property){
return array.map(element=> element[property]);
}
If the 'array' aprameter is not an array or is an empty array, the 'pluck' function should return an empty array or handle the error gracefully.
If the 'property' parameter does not exist in any of the objects within the 'array', the 'pluck' function should handle the absence the the propertt appropriately, such as returning 'undefined' or excluding the object from the resulting array.

## THe 'Filter' Helper

Selecting needed Data with Filter.

### Introduction to Filtering Data

Often, we need to extract specific elements from an array based on certain conditions. Te 'filter' helper allows us to iterate over each element in an array an create a new array containing only the elements that satisfy a given condition.
const numbers= [1,2,3,4,5,6];
const even = numbers.filter( number => number %2===0);
console.log(even)

### Customization and Flexibility

We can define any filtering condition based on our spesific requirements.
