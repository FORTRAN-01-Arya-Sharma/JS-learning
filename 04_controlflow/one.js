//if

// if(true){
//     // code to be executed if condition is true
// }
// if(false){
//     // code will not be executed
// }

// const score = 150;
// if(score >100){
//     const power = score * 2;
//     console.log(`Power is ${power}`);
//     console.log(`${score} is greater than or equal to 100`);

// }
// else{
//         console.log(`${score} is less than 100`);
// }

// if (balance >1000) console.log('You are rich'); this is called as implicite scope like a shorthand of if else statement

// const balance = 100;
// if(balance > 1000){
//     console.log('You are rich');
// }
// else if(balance > 500){
//     console.log('You are middle class');
// }else{
//     console.log('You are poor');
// }

// const userLoggedIn = false;
// const userLoggedInFromGoogle = true;
// const debitCard = true;

// //After one condition satisfied it is not checking other conditions
// if(userLoggedIn && debitCard ){
//     console.log('You can make a transaction');
// }
// else if(userLoggedIn && !debitCard){
//     console.log('You can not make a transaction only when logged in');
// }
// // else if(userLoggedIn || userLoggedInFromGoogle){
// //     console.log('You can make a transaction');
// // }
// else if(!userLoggedIn && debitCard){
//     console.log('You can not make a transaction only with debit card');
// }
// else{
//     console.log('You can not make a transaction');
// }

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = '7'; // 1-12
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("february");
    break;
  case 3:
    console.log("march");
    break;
  case 4:
    console.log("april");
    break;
  case 5:
    console.log("may");
    break;
  case 6:
    console.log("june");
    break;
  case 7:
    console.log("july");
    break;
  case 8:
    console.log("august");
    break;
  case 9:
    console.log("september");
    break;
  case 10:
    console.log("october");
    break;
  case 11:
    console.log("november");
    break;

  case 12:
    console.log("december");
    break;

  default:
    console.log("Invalid month");
    break;
}
// break is important in switch case otherwise it will execute all the cases after the matched case until it finds a break statement or reaches the end of the switch statement.
//but the default case will not be executed