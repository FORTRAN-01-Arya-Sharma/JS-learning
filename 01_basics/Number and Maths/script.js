const score = 400

const balance = new Number(100)
// console.log(balance.toString().length);
//console.log(balance.toFixed(2));//The toFixed() method converts a number to a string. The toFixed() method rounds the string to a specified number of decimals.


const otherNumber =1238.4924234 //formats a number to a specified length
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'));//to make it easy in readability 10,00,000

// ++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++

//console.log(Math);
//console.log(Math.abs(-4));//converting negative values to positive
// console.log(Math.round(4.4));
// console.log(Math.ceil(5.6));
// console.log(Math.floor(5.5));
// console.log(Math.min(12,32,14,43,23,1));
// console.log(Math.max(12,32,14,43,23,1));


//console.log(Math.random());//the value will be btw 0 and 1
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
//so basically Agar Hamen men or maths ke bich ki range ke andar ke Kuchh koi bhi random number chahie To Hamen formula use karte hain and ismein Humne minimum isliye add kara hai Kyunki vah zero aur 10 ke bich Ke Bhi number le rahe hai 

console.log(Math.floor(Math.random() * (max-min+1)) + min);

