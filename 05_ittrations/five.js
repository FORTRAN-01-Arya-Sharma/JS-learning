const coding = ["js", "java", "python", "c++", "c#", "php", "html", "css"];


// coding.forEach( function (item) {
//     console.log(item);
    
// })

// coding.forEach((item) =>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const mycoding = [
    {
        name: "js",
        rating: 5,
        isBest: true,
    },
    {
        name: "java",
        rating: 4,
        isBest: false,
    },
    {
        name: "python",
        rating: 3,
        isBest: true,
    },
    {
        name: "c++",
        rating: 2,
        isBest: false,
    },
    {
        name: "c#",
        rating: 1,
        isBest: true,
    },
    {
        name: "php",
        rating: 0,
        isBest: false,
    }
]

mycoding.forEach((item) => {
        console.log(item.name, item.rating, item.isBest);
 
});
