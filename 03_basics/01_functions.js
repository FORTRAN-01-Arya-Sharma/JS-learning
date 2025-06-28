//this is a function declaration and this is the way to declare a function in javascript and this is the way to call a function in javascript

function sayMyName(){

    // console.log("h");
    // console.log("e");
    // console.log("k");
    // console.log("k");
    // console.log("i");
}
sayMyName();

function addTowNumbers(num1,num2){//these are parameters 
    // num1 + num2;
    // console.log(num1 + num2);

    // let result = num1 + num2;
    // return result
    return num1 + num2;
    
}
addTowNumbers(2,3); //this is the way to call a function in javascript and this is the way to pass the arguments to the function in javascript
addTowNumbers(2,"3");

const result = addTowNumbers(2,9);
// console.log("result: ",result);//this will return undefined because we have not returned anything from the function and this is the way to return a value from a function in javascript


// function loginusermessage(username = "Xspa"){
//     if(!username){
//         console.log("please enter a username");
//         return
         
//     }
//     return`${username} is logged in`;

// }


// console.log(loginusermessage("aryaji"));
//console.log(loginusermessage());//this will return undefined because we have not passed any argument to the function and this is the way to pass an argument


function calculatecartprice(val1,val2, ...num1){//rest operator hai ye
    return num1
}

// console.log(calculatecartprice(200,300,34455,3423,2643,26843,34));//this will return 2 because we have passed only one argument to the function and this is the way to pass an argument



// const user = {
//     name: "Xspa",
//     price: 200
// }

function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
    
}
// handleObject(user)
//tum object ko directly bhi pass kar sakte ho function ke andar aur tum object ko destructure bhi kar sakte ho function ke andar

handleObject({
    name: "Xspa",
    price: 2020
})


// const mynewarray =[200,232,32,30]
function reutrnthevalue(arraydao){
    return arraydao[0]
}
// console.log(reutrnthevalue(mynewarray));//this will return 200 because we have passed an array to the function and this is the way to pass an array to the function in javascript

console.log(reutrnthevalue([200,232,32,30]));//this will return 200 because we have passed an array to the function and this is the way to pass an array to the function in javascript