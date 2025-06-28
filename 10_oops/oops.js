const user = {
    name: "John",
    age: 30,
    loginCount: 5,
    email: "john@example.com",

    getUserInfo: function() {
        // console.log(`Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`);
        // console.log(`Username: ${this.name}`);
        // console.log(this);
        
        
    }
}

//console.log(user.name); // John
// console.log(user.getUserInfo()); // Name: John, Age: 30, Email: john@example.com
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    //return this
}

const userOne = new User("hitesh", 12 ,true)
const userTwo = new User("Ash", 11 ,false)
console.log(userOne.constructor); // User
// console.log(userTwo);

//Step1: whenever we use new a new object is created and this keyword points to that new object

//Step2: a constructor function is being called due to new keyword it packs all the arguments into the object and gives it back to us

//Step3: this keyword injects these arguments into the object

//Step4: you will get these in the function
