//for  of 

// for (const itrator of object) {
    
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const i of arr) {//in this the obj not the js objext it is like seen in a border sence like it could be an array or strings or an array of object like in a border sence
//     console.log(i);   
// }


// const greetings = "hello brohter how are you doing today?";
// for(const chargreet of greetings){
//     // console.log(chargreet);
//     if (chargreet == " "){
//         console.log("empty space detected"); 
//         break;
//     }
//     console.log(`each char is ${chargreet}`); 
    
// }


//Maps
//map is a object that holds key value pairs and the keys can be any data type and the values can be any data type
const map = new Map()
map.set('IND', 'India')
map.set('USA', 'United States of America')
map.set('CAN', 'Canada')
map.set('AUS', 'Australia') 
// console.log(map);
//so ismai sirf unique keys hi honge and the values can be any data type and the keys can be any data type also jis order mai aapne set kiya hai usi order mai aapko milega 


//this is a kind of destructuring the map
// for (const [key,value] of map) {
//     console.log(key,':-',value);//so this will give you the key value pair in the form of array
    
// }

// const myObj = {
//     'Game1': 'NFS',
//     'Game2': 'SPIDERMAN',
//     'Game3': 'GTA',
//     'Game4': 'PUBG',
//     'Game5': 'COD',
// }
// for (const games of myObj) {
//     console.log(games); // this will give you an error forof objects per nahi lagta hai 
    
// }