//primitive

// A primitive data type in JavaScript means:

// A basic, simple type of data that is not an object, and represents a single value only.

//7 hai
//they are call by value
//string,number,boolean,null,underfined,symbol (used in advance js) , bigInt 


const score = 100
const scoreMore =12.32
const isloggedIn = false
const outtemp = null
let userEmail;

const id = Symbol('123')


console.log(id);
console.log(typeof Symbol());
// You're calling the Symbol() function, which creates a new symbol.

// A symbol is a primitive data type used to create unique identifiers.


console.log(typeof Symbol);

// You're checking the type of the Symbol constructor function itself.

// Symbol is a function that returns a new symbol.
const anotherid = Symbol('123')//value is same but internally they are not same

console.log(id == anotherid);

const bigNumber = 623521236213n

console.log(bigNumber);//bigint

//referernce (non-primitive)

//array,objects, functions 


// Non-primitive data types store collections or complex data. Unlike primitive types, they do not store the actual value directly — they store a reference (memory address) to the value.

const heros = ["iron man", "mistharshira", "levie"]

let blowbj={
    name:"arys_diddy",
    age:23,
}

const thisIsAfunction = function(){
    console.log("hello world");
    
} 

console.log(typeof thisIsAfunction);
console.log(typeof blowbj);
console.log(typeof heros);
console.log(typeof anotherid);
