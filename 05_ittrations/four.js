const myObj = {
    Game1: 'NFS',
    Game2: 'SPIDERMAN',
    Game3: 'GTA',
    Game4: 'PUBG',
    Game5: 'COD',
}

for (const key in myObj) {
    // console.log(myObj[game]); // this will give you the value of the object
    
    // console.log(`${key} shortcut is for ${myObj[key]}`);
    
}

const programmingLanguages = ["js", "java", "python", "c++", "c#", "php", "html", "css"];
for (const key in programmingLanguages) {
    // console.log(programmingLanguages[key]);
    //console.log(`${key} shortcut is for ${programmingLanguages[key]}`);
}


const map = new Map()
map.set('IND', 'India')
map.set('USA', 'United States of America')
map.set('CAN', 'Canada')
map.set('AUS', 'Australia') 
for (const key in map) {
    console.log(key);//nothing will come here bec map is non iterable so it will not work here but there are some ways to iterate map that we will do later
    
}

