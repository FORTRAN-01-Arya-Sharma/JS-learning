const name = "Arya_Sharma"
const repoCount = 34

// console.log(name + repoCount + "value");
console.log(`hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('This-is-sharma-ji-daddy')
console.log(gameName[3]);
console.log(gameName.__proto__);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(0,7);
console.log(anotherString);


const newStringOne = "     mrungreat      "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://arya.com/aryasharma%20mrungreat"

console.log(url.replace('%20', '-'));//this will replace 
console.log(url.includes('sunder'));//checks weather the word is in the variable

console.log(gameName.split('-'));//split the string with the specific conditions and then make an array

