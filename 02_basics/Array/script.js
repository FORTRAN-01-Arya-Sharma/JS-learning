//array

const myArr = [1,2,3,4,5,6]
const myHeros = ["ironnigga","captionbackshots","dr.sucker","backdildo","gulp","spiderjuzzman"]

const numbers =[1,2,3,4]
const myArray2 = new Array(21,23,43,45,78)
// console.log(myArr[0])
// console.log(myHeros[2])
// array will always make shallow copies 


// A shallow copy means copying an object without recursively copying nested objects. It duplicates the top-level properties, but if a property is a reference (like an object or array), both the original and the copy will share that reference 


// A deep copy in JavaScript creates a new object with all nested objects/arrays recursively copied, so changes to the copy don’t affect the original.



// In a Shallow Copy:

// Primitive values (like strings, numbers, booleans) are copied by value, so changing them in the copied object won’t affect the original.

// Objects and arrays are copied by reference, so changes to nested objects/arrays will affect the original.

//Array methods
// myHeros.push("wintersmaker")
// console.log(myHeros);
// myHeros.pop()


// myHeros.unshift(0)//this will add 0 in the starting of the array
// myHeros.shift()//remove element form the starting of the array

// console.log(myHeros);
// console.log(myHeros.includes("captionbackshots69"));
// console.log(myHeros.indexOf("ironnigga"));//if the element is not present the the output will be -1

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

//slice,splice

console.log("A ",myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log("c ",myn1);
console.log(myn2);



// 🥧 slice() → Does NOT change the original array
// Used to copy/extract a portion of an array.

// Returns a new array.

// Original array stays unchanged.

// ✂️ splice() → Changes the original array
// Used to add/remove elements.

// Returns an array of removed elements.

// Original array gets modified.