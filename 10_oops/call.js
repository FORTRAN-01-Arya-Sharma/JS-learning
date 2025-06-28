function SetUsername(username){
    //complex DB call
    this.username = username;
}

function createUser(username,email, password) {
    //SetUsername(username);//this will not work,basically hua kaya hai ki uska reference gaya hai call nahi hua hai 
    SetUsername.call(this, username);
    //this will work because we are using call to invoke SetUsername with the current context (this) and using call to hold the context of the current object
    this.email = email;
    this.password = password;
}

const ash = new createUser("ash", "ash@example.com", "password123");
console.log(ash); // ash
