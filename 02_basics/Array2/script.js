const Mavel_heroes = ["hammerofthor", "ironnigga","spidercuman"]
const dc_heroes =["superdiddyman","flatchick","ballman"]
// Mavel_heroes.push(dc_heroes)
//console.log(Mavel_heroes);//yaha per ye dc wale ko as a data lelega
//console.log(Mavel_heroes[3][1]);

// let new_hero = Mavel_heroes.concat(dc_heroes)
// console.log(new_hero);


//spread operator

// const all_new_heroes =[...Mavel_heroes,...dc_heroes]
// console.log(all_new_heroes);


// another_array =[1,2,3,[4,5],7,[8,[9,10],11],12]
// console.log(another_array);

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Sharmaji"));
console.log(Array.from("Sharmaji"));//converting individual character into an array
console.log(Array.from({name:"Sharmaji"}))//interesting 


let score1 =100
let score2 =200
let score3 =300 
//will return a new array form set of elements
console.log(Array.of(score1,score2,score3));

