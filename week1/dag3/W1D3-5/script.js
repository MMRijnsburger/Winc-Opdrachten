let colors = ["yellow", "blue", "red", "orange", "pink"];

let index = 0;

while (index < colors.length) {
    console.log(colors[index]);
    index++;
}

for (let index = 0; index < colors.length; index++) {
    console.log(colors[index]);
}

// foreach is a method of array
colors.forEach(element => console.log(element));

// 1. Hoeveel regels neemt mijn for loop in beslag?
// 3

// 2. Hoeveel regels neemt mijn forEach method in beslag?
// 1

// 3. Welke voordelen heeft het gebruiken van een array 
// method nog meer t.o.v. een for of een while loop?
// Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
// Leesbaarheid, het is duidelijk dat je werkt met het array.

// 4. Stel je hebt een object met 45 properties.
// Probeer eens uit te zoeken (gebruik Google) hoe je die
// 45 properties kunt console.log-en zonder elke property
// handmatig te console.log en.
// Probeer dit nu eens in een stukje code (en gebruik hier een
// object met 5 properties voor). Ben je nu aan het itereren?
// Ja.
const car = {
    brand: 'Toyota',
    type: 'Yaris',
    color: 'Green',
    doors: 5,
    year: 2003
};

const keys = Object.keys(car);
keys.forEach(element => console.log(element));

const values = Object.values(car);
values.forEach(element => console.log(element));
