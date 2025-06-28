// const user = {
//     username: "pain",
//     price: 200,
//     welcomemessage: function(){
//         // this reffers to the current constest in the object
//         console.log(`welcome ${this.username} to the world of ${this.price}`);
//         // console.log(this);
        
        
//     }
// }
// user.welcomemessage();
// user.username = "arya sharma";
// user.price = 3000;
// user.welcomemessage();

//console.log(this);//this will return the global object in the browser and this will return the global object in node js
//there is no global object in this node enviroment so it will return empty object


//but this will return window object in the browser and this will return global object in node js 


// function chai(){
//     let username = "Xspa";  
//     console.log(this);//this will return the global object in the browser and this will return the global object in node js
//     console.log(this.username);//this will not work inside of the function like this but ye object per kaam karega
    
    
// }
// chai();

//this is an arrow function and this is the way to define an arrow function in javascript and this is the way to call an arrow function in javascript
// just remove the function keyword and add the arrow function syntax
// const chai = () => {
//     let username = "Xspa";  
//     console.log(this);//this will return the global object in the browser and this will return the global object in node js
//     //console.log(this.username);//this will not work inside of the function like this but ye object per kaam karega
// }
// chai()

// const notAnArrowFunction = function(){

// }

const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(2, 3)); // this will return 5 because we have passed 2 and 3 as an argument to the function and this is the way to pass an argument to the function in javascript


//this is an implicit return in arrow function and this is the way to define an implicit return in arrow function in javascript and this is the way to call an implicit return in arrow function in javascript
const addTwonum = (num1,num2) => (num1 + num2)


// const myarray = [1,2,3,4,5,6,7,8,9,10];
// myarray.forEach((num) => {
//     console.log(num); // this will return 1,2,3,4,5,6,7,8,9,10 because we have passed 1 to 10 as an argument to the function and this is the way to pass an argument to the function in javascript
// })