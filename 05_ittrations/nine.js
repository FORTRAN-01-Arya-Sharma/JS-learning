// const myNumbers = [1, 2, 3, 4, 5];
// const total = myNumbers.reduce((accumulator, currentvalue) => {
//     console.log(`accumulator: ${accumulator}, currentvalue: ${currentvalue}`); // accumulator: 0, currentvalue: 1
    
//     return accumulator + currentvalue;
// }, 0)
// console.log(total); // 55


const shoppingCart = [
    { name: 'Shirt', price: 1999 },
    { name: 'Pants', price: 2999 },
    { name: 'Shoes', price: 49999 },
    { name: 'Hat', price: 1499 }
];

const pricetopay = shoppingCart.reduce((acc , item) => acc + item.price,0)

console.log(pricetopay); // 54996
