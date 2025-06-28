class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }


    get email(){
        return "babu nahi milega"; // Hides the actual email
    }
    set email(newEmail){
        this._email = newEmail; // This will cause a stack overflow
    }

    get password(){
        return "********"; // Hides the actual password
    }

    set password(newPassword){
        this._password = newPassword; // This will cause a stack overflow
    }

}

const Ash = new User("Ash123@gmail.com", "4321")
console.log(Ash.password); // ********
console.log(Ash.email); // babu nahi milega