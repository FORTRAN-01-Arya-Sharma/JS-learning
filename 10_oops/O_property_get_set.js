const User = {
    _email: "ash@gmail.com",
    _password: "1234",
    get email() {
        return "babu chupp"; // Hides the actual email
    },
    set email(newEmail) {
        this._email = newEmail; // This will cause a stack overflow
    },
    get password() {
        return "********"; // Hides the actual password
    },
    set password(newPassword) {
        this._password = newPassword; // This will cause a stack overflow
    }
};
//Object.create() is a factory method that creates a new object, using an existing object as the prototype of the newly created object.
// It allows you to create an object with a specific prototype, which can be useful for inheritance or creating objects with shared properties and methods.
const Ash = Object.create(User);
console.log(Ash.password); // ********
console.log(Ash.email); // babu chupp
