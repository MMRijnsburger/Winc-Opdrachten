// Opdracht: Array methods - deel 2

// A: Schrijf een JavaScript functie die een bepaald item weet te vinden en retourneren op basis van een bepaalde value.  
// Zoek het hele object van Spiderman, gebaseerd op de name "Spiderman". Gebruik .find.

const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }
]

const findSpiderMan = function (superheroesFind) {
    return superheroesFind.find(function (superhero) {
        return superhero.name === "Spiderman";
    });
};

console.log("Search the object for Spiderman:", findSpiderMan(superheroes));
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

// B: In een array met integers. Zorg dat je een array returned met de integers verdubbeld.
// Gebruik de .forEach method of, een level hoger: de .map method.

const doubleArrayValues = function (array) {
    let doubled = [];
    array.forEach(number => {
        doubled.push(number * 2);
    })
    return doubled;
};

console.log("Double the Array values:", doubleArrayValues([1, 2, 3]));
// result should be [2, 4, 6]

// C: In een array met integers. Schrijf een JavaScript functie die een checkt of er een integer in de array aanwezig is die groter is dan 10. 

const containsNumberBiggerThan10 = function (array) {
    return array.some(number => number > 10);
};

console.log("Is er een nummer groter dan 10:", containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
// result should be true

// D: In een array met strings. Schrijf een JavaScript functie die kijkt of er een bepaalde string: "Italy" in de array aanwezig is.
// The includes() method determines whether an array contains a specified element.

const isItalyInTheGreat7 = function (array) {
    return array.includes('Italy');
};

console.log("Italy aanwezig:", isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']));
// result should be true

// E: In een array met integers. Schrijf een JavaScript functie die elke integer vertienvoudigt.
// Gebruikt .forEach, of als je al wat advanced stuff wilt: gebruik .map.

const tenfold = function (array) {
    let numberX10 = [];
    array.forEach(number => {
        numberX10.push(number * 10);
    });
    return numberX10;
};

console.log("Numbers x 10:", tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]

// F: In een array met integers. Schrijf een JavaScript functie die checkt of alle waardes in de array onder de 100 zijn,
// en true or false retourneert.
// The every() method checks if all elements in an array pass a test (provided as a function).

const isBelow100 = function (array) {
    return array.every(number => number < 100);
};

console.log("Everything < 100:", isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))
// result should be: false

// G Bonus: In een array met integers. Schrijf een JavaScript functie
// die alle waardes in de array bijelkaar optelt en het totaal van de som retourneert. Gebruik de .reduce method. En echt, gebruik Google.

const bigSum = function (array) {
    return array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
};

console.log("Result of the big sum:", bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118


const numbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];

const total = numbers.reduce((currentTotal, numbers) => {
    return numbers + currentTotal;
});

console.log("Resuls of sum:", total);
// result should be 1118