var a = 100; // global scope
if (true) {

    let a = 1; // function scope
   // let b = 2; // block scope
    //const c = 3; // block scope
    //console.log("inner a: ", a); // 1
    
}

// console.log(c);
// console.log(b);
//console.log(a);

//global scope is different in code enviroment through node and browser



function one(){
    const username = "Xspa";
    function two(){
        const password = "1234";
        //console.log(username);
        
    }
    //console.log(password); // this will return undefined because password is not defined in this scope
    two();
    
}
one();


if (true) {
    const username = "arya";
    if(username === "arya"){
        const website = "xspa.com";

        //console.log(username + website);
        if(website === "xspa.com"){
            const password = "1234";
            
            
    }
    //console.log(website); // this will return undefined because website is not defined in this scope
      

}
 //console.log(username);
 
}
//console.log(username); // this will return undefined because username is not defined in this scope


//+++++++++++++++++++++++++++++++question+++++++++++++++++++++++++++++++

function addone(value){
    return value + 1;
}
addone(2); // this will return 3 because we have passed 2 as an argument to the function and this is the way to pass an argument

//so this variable is holding a funtion which is sometimes called as expression function
const addTwo = function(value){
    return value + 2;
}
addTwo(2); // this will return 4 because we have passed 2 as an argument to the function and this is the way to pass an argument