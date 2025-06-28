// const coding = ["js", "java", "python", "c++", "c#", "php"];

// const values = coding.forEach((item) =>{
//     console.log(item);
//     return item;//jo foreach loop hota hai vo koi chiz return nahi karta hai
// })

// console.log(values);


const myNmbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNmbers.filter((num) => {
//     return num > 5;
    
// })
// const newNums = myNmbers.filter((num) => {
    
// });

// const newNums = [];
// myNmbers.forEach((num) => {
//     if(num > 5) {
//         newNums.push(num);
//     }
    
// })
// console.log(newNums);


const books =[{ title : "js", rating: 5, isBest: true},
{ title : "java", rating: 4, isBest: false},
{ title : "python", rating: 3, isBest: true},
{ title : "c++", rating: 2, isBest: false},
{ title : "c#", rating: 1, isBest: true},
{ title : "php", rating: 0, isBest: false}]

const userbooks = books.filter((book) => book.rating >=3)
const userbooks1 = books.filter((book) => book.title == "js")
const userbooks2 = books.filter((book) => book.isBest == true)
// console.log(userbooks);
// console.log(userbooks1);
console.log(userbooks2);

