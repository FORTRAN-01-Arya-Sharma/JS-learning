//singleton


// object literal
// Object.create({})


const mySym = Symbol("key1")


const jsuser ={
    name: "bobbie boy",
    "full name":"arya sharma",
    [mySym]:"mykey1",//this is the symbol and we have to use the symbol to access the value of the key this is the correct way to write a symbol in the object
    age:22,
    location:"delhi",
    email:"thisisdiddy123@gmail.com",
    isLoggedIn:false,
    lastlogindays:["mon","tues"]
}


//so this is the two ways to access the object properties
//console.log(jsuser.email);
//console.log(jsuser["email"]);
//console.log(jsuser.full name);//this is the dot notation to access the value of the key but since there is a space in the key name so we have to use the bracket notation to access the value of that key
//so this is the two ways to access the object properties
///console.log(jsuser["full name"]);//if there is a space in the key name then we have to use this method to access the value of that key

//console.log(jsuser.mySym);
//console.log(typeof jsuser.mySym);//but this is not the correct way to access the value of the key because this is a symbol and we have to use the symbol to access the value of that key
//console.log(jsuser[mySym]);
//console.log(typeof jsuser[mySym]);//this is the correct way to access the value of the key because this is a symbol and we have to use the symbol to access the value of that key

//by this we can overwrite the value of the key in the object
jsuser.email ="diddyboibaby321@gmail.com"

//Object.freeze(jsuser)//this will freeze the object and we cant change the value of the key in the object
//.email ="diddyboioyaoya321@gmail.cum"
//console.log(jsuser);
//this will not work because we have frozen the object and we cant change the value of the key in the object

jsuser.greeting = function(){
    console.log("hello bro!");
}
jsuser.greeting2 = function(){
    console.log(`hello bro ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());

