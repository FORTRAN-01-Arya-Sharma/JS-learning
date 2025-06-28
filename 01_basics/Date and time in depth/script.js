//date

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());

console.log(typeof myDate);

// let myCreatedDate = new Date(2025,0 ,23)
// let myCreatedDate = new Date("2025-03-19")
let myCreatedDate = new Date("03-19-2023")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());






let myTimeStamp = Date.now()

//console.log(myTimeStamp);//1745062203863 this is in millisecond

//console.log(myCreatedDate.getTime());//this will check the date form 1st jan and then convert it into milliseconds
//console.log(Math.floor(Date.now()/1000));//Date.now() is a JavaScript method that returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC (also known as the Unix Epoch). and we are converting milliseconds to seconds



let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMinutes());


newDate.toLocaleString('default',{
    weekday:"long",
    
})



//NOTES //

// ✅ JavaScript new Keyword — Full Summary
// The new keyword in JavaScript is used to create a new instance of an object from a constructor function (like Date or a custom function).

// When you use new, JavaScript does four things behind the scenes:

// Creates a new empty object.

// Sets this inside the constructor to point to that new object.

// Links the new object to the constructor’s .prototype.

// Returns the object (unless the constructor returns another object manually).

// So when you write:"

// let myCar = new Car("BMW");


// -A new object is created.

// -this.brand = "BMW" assigns the value to that new object.

// You now have an object with a brand property set to "BMW".

// -If you don’t use new, then:

// -this won’t refer to a new object.

// -In non-strict mode, it points to the global object (window), which can lead to unintended side effects (e.g., window.brand = "BMW").

// -Using new ensures that this always refers to the specific new object being created — it's like telling JavaScript:

// "This function isn't just running — it's building something new."