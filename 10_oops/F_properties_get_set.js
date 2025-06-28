function User(email,password){
    this.email = email;
    this.password = password;

    Object.defineProperty(this, 'email', {
        get: function() {
            return "babu nahi milega"; // Hides the actual email
        },
        set: function(newEmail) {
            this._email = newEmail; // This will cause a stack overflow
        }
    });

    Object.defineProperty(this, 'password', {
        get: function() {
            return "********"; // Hides the actual password
        },
        set: function(newPassword) {
            this._password = newPassword; // This will cause a stack overflow
        }
    });
}
const Ash = new User("Ash123@gmail.com", "4321");   
console.log(Ash.password); // ********
console.log(Ash.email); // babu nahi milega 