//Traditional
function multiplyTraditional(a, b) {
  return a * b;
}
// Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(2, 3));

const namePeople = "Jhon";
const agePeople = 25;
console.log(`My name is ${namePeople}
 and I'm ${agePeople} years old.`);
// Ouput:My name is Jhon and I'm 25 years old.

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

class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const personClass = new Person("Alice");
personClass.sayHello();
// Output:Hello, my name is Alice
