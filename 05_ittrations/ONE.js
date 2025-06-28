//for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 4) {
//         console.log("4 is diddy number");
        
//     }
//     console.log(element); // this will return the i of the loop from 0 to 9

// }


// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop ${i}`); // this will return the i of the loop from 0 to 9
    
//     for(let j = 0; j <= 10; j++){
//         console.log(`inner loop ${j} and inner value ${i}`); // this will return the j of the loop from 0 to 9
//         if(j == 5){
//             console.log("inner loop has cum"); // this will return the j of the loop from 0 to 9
//             break; // this will break the inner loop when j is equal to 5
//         }
//     }
    
// }

// let myArray = ["flash", "ironman", "spiderman", "thor", "hulk", "black widow", "captain america"];
// for (let i = 0; i < myArray.length; i++) {
//     const elemnet = myArray[i];
//     if(elemnet == "thor") {
//         console.log("thor is diddy number"); // this will return the i of the loop from 0 to 9
//         break
//     }
//     console.log(elemnet); // this will return the i of the loop from 0 to 9
// }

let myArray = ["flash", "ironman", "spiderman", "thor", "hulk", "black widow", "captain america"];
for (let i = 0; i < myArray.length; i++) {
    const elemnet = myArray[i];
    if(elemnet == "thor") {
        // console.log("thor is diddy number"); // this will return the i of the loop from 0 to 9
        continue
    }
    console.log(elemnet); // this will return the i of the loop from 0 to 9
}