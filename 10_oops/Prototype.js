// let myName = "Ash      "

// console.log(myName.trueLength); // "Ash"

let myHero = ["thor", "ironman", "hulk", "spiderMan"];
let heroPower = {
    thor: "hammer",
    ironman: "suit",
    hulk: "strength",
    spiderMan: "web-shooters",

    getSpiderPower: function() {
        //console.log(`Spider-Man's power is: ${this.spiderMan}`);
    }

}

Object.prototype.ash = function() {
    //console.log("This is a custom method added to Object prototype.");
}
heroPower.ash();

Array.prototype.ashgrtz = function() {
    //.log(`hello from ash`);
}
myHero.ash(); // This will work because myHero is an array, and arrays are also objects in JavaScript.
myHero.ashgrtz(); // This will work because we added ashgrtz to Array prototype.
//heroPower.ashgrtz(); // This will not work because ashgrtz is not defined on Object prototype, it's defined on Array prototype.


//inheritance

const user = {
    name: "John",
    age: 30,
    loginCount: 5,
    email: "john@example.com"
}

const Teacher = {
    makeVideo:true
}

const TeachingSupport ={
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: TeachingSupport// Setting the prototype of TASupport to TeachingSupport
}

Teacher.__proto__ = user; // Setting the prototype of Teacher to user 
//this is prototypal inheritance
//console.log(Teacher.name); // John




//modern syntax for inheritance

Object.setPrototypeOf(Teacher, user); // Setting the prototype of Teacher to user using Object.setPrototypeOf
//console.log(Teacher.name); // John

let anotherUser = "diddywood       ";

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length of the string is: ${this.trim().length}`);
}
anotherUser.trueLength(); // This will call the trueLength method defined on String prototype

"yoyoyo".trueLength(); // This will also call the trueLength method defined on String prototype
"coldmilkcoffee".trueLength(); // This will also call the trueLength method defined on String prototype