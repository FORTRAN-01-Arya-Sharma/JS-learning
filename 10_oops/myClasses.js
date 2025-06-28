// //this is after the ES6

// class Person{
//     constructor(name, email, password){
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         // Simulating password encryption
//         return `encrypted-${this.password}`;
//     }

//     // You can add more methods here

//     changePersonName(){
//         return`${this.name.toUpperCase()}`
//     }
// }

// const person1 = new Person("John", "john@example.com", "8056");
// console.log(person1.encryptPassword());
// console.log(person1.changePersonName());


// behind the scenes

function Person(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;

}

Person.prototype.encryptPassword = function() {
    // Simulating password encryption
    return `encrypted-${this.password}`;
}

Person.prototype.changePersonName = function() {
    return `${this.name.toUpperCase()}`;
}

const person1 = new Person("John", "john@example.com", "8056");


console.log(person1.encryptPassword());
console.log(person1.changePersonName());
