// const userEmail = "arya@gmail.com";
// const userEmail = "";//this will return true bec of array

// if(userEmail){
//     console.log("user email is present"); // this will return true because userEmail is not empty and it is a truthy value  
    
// }
// else{
//     console.log("user email is not present"); // this will return false because userEmail is empty and it is a falsy value  
    
// }
// falsy values in js are 0,-0 ,"", undefined, null, NaN, false,BigInt(0)

// truthy values in js are all other values except falsy values


// 🚫"JavaScript has -0 due to IEEE 754 to handle edge cases like direction in division, even though it's falsy like 0."🚫

//truthy values some weird examples "0", 'false'," ", [],{},function(){},true,Infinity,BigInt(1),Symbol(),new Date(),new Error(),-1,3.14,{},"hello",true,false,NaN,undefined,null,BigInt(0),BigInt(1),BigInt(-1),BigInt(2),BigInt(-2),BigInt(3),BigInt(-3),BigInt(4),BigInt(-4),BigInt(5),BigInt(-5),BigInt(6),BigInt(-6),BigInt(7),BigInt(-7),BigInt(8),BigInt(-8),BigInt(9),BigInt(-9)


// if(userEmail.length === 0){
//     console.log("user email is not present"); // this will return true because userEmail is empty and it is a falsy value  

    
// }

// const emptyObj ={} // this will return true because userEmail is empty and it is a falsy value;
// // Object.keys(emptyObj) THIS PART WILL RETURN AN ARRAY OF KEYS IN THE OBJECT
// if(Object.keys(emptyObj).length === 0){
//     console.log("BOBOBBOBOBOBOBOBOBOBOBOOBOBOBOBOOB"); // this will return true because userEmail is empty and it is a falsy value  
    
// }

//Nullish coalescing operator (??) is used to assign a default value to a variable if the variable is null or undefined. It is similar to the logical OR operator (||), but it only checks for null and undefined values, not for falsy values like 0 or "".

// let val1;
// // val1 = 5 ?? 10; // 5
// // val1 = null ?? 10; // 10
// val1 = undefined ?? 10; // 10
// console.log(val1); 


//terniary operator
//condition ? true : false; // this is the syntax of terniary operator in js

const iceTeaPrice = 100;
iceTeaPrice >= 90 ? console.log("ice tea is expensive") : console.log("ice tea is cheap"); // this will return true because iceTeaPrice is greater than 90 and it is a truthy value