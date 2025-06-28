"use strict"; // treat all JS code as newer version

// alert("hello") we are using nodejs not browser so error aaye ga

console.log((9+9))
console.log("papa bolo beta")
//null = standalone value
//symbol=>unique
console.log(typeof null);
console.log(typeof undefined);


// "typeof null returns 'object' due to a bug in the original implementation of JavaScript. Internally, values were tagged using bits, and null was represented as all zeroes — which got misinterpreted as the object type. Although it's a mistake, it's kept for backward compatibility. So, we use value === null to reliably check for null."