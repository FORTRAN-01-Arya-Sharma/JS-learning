// const { useReducer } = require("react");

// function multiplyBy5(num) {
//   return num * 5;
// }

// multiplyBy5.power = 2; // Adding a property to the function
// console.log(multiplyBy5(10)); // 50
// console.log(multiplyBy5.prototype); // 2

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.incrementScore = function() {
  this.score++;
}

createUser.prototype.getUserInfo = function() {
  console.log(`Username: ${this.username}, Score: ${this.score}`);
}

const user1 = new createUser("Alice", 10);
const user2 = new createUser("Bob", 20);
console.log(user1.username); // Alice  
console.log(user2.username); // Bob

user1.incrementScore();
user1.getUserInfo(); // Username: Alice, Score: 11


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/