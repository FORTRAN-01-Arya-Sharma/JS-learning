class user {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);    
    }
}

class Teacher extends user{
    constructor(username, subject){
        super(username); // Call the parent class constructor
        this.subject = subject;
    }

    addCourse(){
        console.log(`Course added for ${this.username} in ${this.subject}`);
    }
}

const teacher1 = new Teacher("Alice", "Math");
const teacher2 = new user("BobTheBuilder");
teacher1.logMe(); // Username: Alice
teacher1.addCourse(); // Course added for Alice in Math
console.log(teacher1 instanceof Teacher); // true
console.log(teacher1 instanceof user); // true
console.log(teacher2 instanceof Teacher); // false
console.log(teacher2 instanceof user); // true
