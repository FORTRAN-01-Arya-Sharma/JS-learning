// Immediately Invoked Function Expressions (IIFE)

//basically Global scope ke pollution Se dikkat Hoti Hai Apne main function ko to usse bachane ke liye we use iife

(function add(a,b){
    const sum = a + b;
    console.log('sum:', sum); // this will return 3 because we have passed 2 and 3 as an argument to the function and this is the way to pass an argument   
    return sum;
    
})(2,3); // this will return 3 because we have passed 2 and 3 as an argument to the function and this is the way to pass an argument
//; this is the way to end an iife in javascript also important bec if we dont apply this we will get an error

((name)  => {
    console.log(`db connected successfully ${name}`);
    
})('arya ji')