class user {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  logMe() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }

  static createId(){
    return `123`
  }// This is a static method, it belongs to the class itself, not to instances of the class
  // Static methods are called on the class itself, not on instances of the class.
    // You can call it like this: user.createId();
}

const Ash = new user("Ash", 25);
Ash.logMe(); // Name: Ash, Age: 25
///console.log(Ash.createId()); // this will not work because createId is a static method and cannot be called on an instance of the class

class Teacher extends user {
  constructor(name, age, subject) {
    super(name, age); // Call the parent class constructor
    this.subject = subject;
  }

  addCourse() {
    console.log(`Course added for ${this.name} in ${this.subject}`);
  }
}

const masterji = new Teacher("Masterji", 40, "Math");
masterji.logMe(); // Name: Masterji, Age: 40
console.log(masterji);
//masterji.createId(); // This will not work because createId is a static method and cannot be called on an instance of the class
