const tinderUser = new Object();//this is a singleton object and this is the correct way to create a singleton object in javascript

tinderUser.id = 1234567890;
tinderUser.name = "diddyboy";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);


const regularUser = {
    email :"something.gmail.com",
    fullName :{
        realname:"arya",
        nickName:"daddy"
    }

}

//if we want to access the object in the object then we have to use the dot notation or the bracket notation to access the value of the key in the object
//console.log(regularUser.fullName.nickName);

//we have use ? bec if the value if not present then it will not give an error and it will return undefined
// console.log(regularUser.fullNamejsuser.nickName);


const object1 = {
    1:"a",
    2:"b",
    3:"c",
}
const object2 = {
    4:"d",
    5:"e",
    6:"f",
}
const object3 = {
    7:"g",
    8:"h", 
    9:"i",
}
//same array wali dikkat aaye gi inmai like ek naya single object nahi ban sakta hai like it will we an object inside an object
// const object4 = {object1,object2,object3}
// console.log(object4);

// const collectionofOBJ = Object.assign({},object1,object2,object3)//this will merge the object and it will create a new object with the values of the keys of the object and it will not create a new object inside an object

const collectionofOBJ = {...object1,...object2,...object3}//spread operator is used to merge the object and it will create a new object with the values of the keys of the object and it will not create a new object inside an object
// console.log(collectionofOBJ);


const users =[
    {  name:"diddy",
        age:22,
        location:"delhi",
    },{
        id:1,
        name:"diddy",
        age:22,
        location:"delhi",
    },{
        id:1,
        name:"diddy",
        age:22,
        location:"delhi",
    },{
        id:1,
        name:"diddy",
        age:22,
        location:"delhi",
    }

]

users[1].name
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));//this will return the keys of the object in an array form the output datatype will be an array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty("name"));//this will check if the object has the key or not and it will return true or false


//destructuring of object

//Destructuring is a feature that lets you unpack values from arrays or properties from objects into separate variables — in a clean and concise way.

const course = {
    cousename:"javascript",
    price: 999,
    description:"this is a javascript course",
    isPaid:true,
}

// course.cousename

const {price :pr} = course
console.log(pr);//this will return the value of the key price in the object course
//this is the destructuring of the object and we can use this to access the value of the key in the object and we can also rename the key name to whatever we want to use in our code

//THIS IS JASON OBJECT
// {
//     "name":"papi",
//     "course":"javascript",
//     "price": 9999,    
//     "isPaid":false
// }

//this is an array of objects and this is the correct way to write an array of objects in javascript
// [

//     {
//         "name":"papi",
//         "course":"javascript",
//         "price": 9999,    
//         "isPaid":false
//     },
//     {
//         "name":"papi",
//         "course":"javascript",
//         "price": 9999,    
//         "isPaid":false
//     },
//     {
//         "name":"papi",
//         "course":"javascript",
//         "price": 9999,    
//         "isPaid":false
//     }
// ]