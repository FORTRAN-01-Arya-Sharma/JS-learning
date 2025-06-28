//console.log(Math.PI);
//Math.PI = 5;
//console.log(Math.PI); // 3.14, because Math.PI is a read-only property


const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

console.log(descriptor); // { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }

const coffee = {
    name: "ColdMilkSweetCoffee",
    price: 450,
    isAvailable: true,

    orderCoffee: function(){
        console.log("coffee didn't make");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(coffee, 'name'));

// Object.defineProperty(coffee, 'name', {
//     value: "HotMilkSweetCoffee",
//     writable: false,
//     enumerable: false,
//     configurable: true
// });

// console.log(Object.getOwnPropertyDescriptor(coffee, 'name'));
//to get the object itratable
for (let [key, value] of Object.entries(coffee)) {
    if(typeof value !== 'function')
    console.log(`${key}: ${value}`);
    
}
