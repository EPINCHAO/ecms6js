let a, b;

[a, b] = [1, 2];

console.log(a);
console.log(b);

//assigment array
[a = 5, b = 7] = [1];
console.log(a);
console.log(b);

console.log("Swapping VAriables");
let c = 1;
let d = 3;
[c, d] = [c, d];

console.log(c);
console.log(d);

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr);
console.log("assigment function");
function f() {
  return [1, 2];
}
let e, g;
[e, g] = f();
console.log(e);
console.log(g);

console.log("objets user");
const user = {
  id: 42,
  isVerified: true,
};

const { isVerified, id } = user;
console.log(id);
console.log(isVerified);

// unpackinf =d fields from objects passed as a function parameter

const user1 = {
  id: 30,
  displayName: "Raz",
  fullName: {
    firstName: "Mike",
    lastName: "Laris",
  },
};
function userId({ id }) {
  return id;
}
function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}
console.log(userId(user1)); // 30
console.log(whois(user1)); // "Raz is Mike"
